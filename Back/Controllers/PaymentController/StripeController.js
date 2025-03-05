const pool = require("../../Config/database");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SCERET_KEY);

const StripeController = async (req, res) => {

    console.log("stripe controller");
  try {
    const { products, pay, guest } = req.body;
    console.log("Controller Route Hit");
    console.log("Products:", products, "Pay:", pay, "Guest:", guest);

    if (!products || !pay || !guest) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const lineItems = products.map((product) => ({
      price_data: {
        currency: "USD",
        product_data: {
          name: product.name,
          images: [product.image_main],  // Ensure this is a valid URL
        },
        unit_amount: pay * 100, // Convert dollars to cents
      },
      quantity: guest, // Stripe expects "quantity" instead of "guestNumber"
    }));

    console.log(products[0].id);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:5173/fail",
      metadata: {
        card_id:products[0].id,
        guestCount: guest,
      },
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Stripe Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = StripeController;
