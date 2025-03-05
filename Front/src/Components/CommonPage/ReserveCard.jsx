import { formatDate, formatEventTime } from "../../util/DateFormatter";
import store from "../../../Store";
import { loadStripe } from "@stripe/stripe-js";
import { handleReserve } from "../../Features/User/UserSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function ReserveCard({ check, datadetailedEvent }) {
  const userDetails = useSelector((store) => store.user);
  console.log(userDetails);
  const { scheduledEvents } = userDetails;
  const userSeats = useRef(null);
  const [seat, setSeat] = useState(datadetailedEvent.available_seats);
  const [amount, setAmount] = useState(datadetailedEvent.price);
  const navigate = useNavigate();

  const notify = () =>
    toast.success("New event is scheduled", {
      className: "text-[12px] w-[250px]!",
    });

  const notify1 = () =>
    toast.success("Event is already scheduled", {
      className: "text-[12px] w-[250px]!",
    });

  function handleUser() {
    const no_of_reserveSeat = userSeats.current.value;
    if (no_of_reserveSeat === "") {
      setSeat(datadetailedEvent.available_seats);
      setAmount(datadetailedEvent.price);
      return;
    }
    const updatedSeat = datadetailedEvent.available_seats - no_of_reserveSeat;
    setSeat(updatedSeat);
    setAmount(
      no_of_reserveSeat * datadetailedEvent.price + datadetailedEvent.price
    );
  }

  // Load Stripe once globally
  const stripePromise = loadStripe(
    "pk_test_51QzDEW2eBk2Ytfec9qDwRxqP8kahT49DURiIC66jGTmTqJjm8wjVuKyo5AJgkHAek55zPl2X0VkQHWAZBM5ZKNDP00qHUlKS20"
  );

  async function handleReserveMySeat(card) {
    try {
      console.log("Reserve button clicked");

      let no_of_reserveSeat = userSeats.current.value || 0;
      const cardCheck = scheduledEvents.findIndex(
        (data) => data.id === card.id
      );

      if (cardCheck !== -1) {
        notify1();
        store.dispatch(handleReserve(card, no_of_reserveSeat));
      } else {
        const stripe = await stripePromise;

        const body = {
          products: [
            {
              id: card.id,
              name: card.name,
              image_main: card.image_main,
            },
          ],
          pay: amount,
          guest: no_of_reserveSeat,
        };

        const res = await fetch("http://localhost:5000/payment/check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        if (!res.ok) {
          throw new Error("Failed to create Stripe session");
        }

        const session = await res.json();

        if (!session.id) {
          throw new Error("Invalid session ID received");
        }

        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          console.log("Error during payment:", result.error);
          return;
        }
      }
    } catch (error) {
      console.error("Payment Error:", error);
    }
  }

  return (
    <div
      className={`${
        check === "favorite" || check === "remove" || check === "top"
          ? "h-[260px]"
          : "h-[200px]"
      } w-[275px] mt-[10px] p-5 flex flex-col  bg-white bg-[0%_0%] bg-no-repeat bg-padding-box shadow-[0px_3px_16px_rgba(0,0,0,0.14)] border border-[#DDDDDD] rounded-[12px] opacity-100`}
    >
      <h1
        style={{ fontFamily: "Brown, sans-serif" }}
        className="text-left opacity-80 font-normal text-[16px]  tracking-[1.19px] text-[#222222]"
      >
        {formatEventTime(
          datadetailedEvent.start_date,
          datadetailedEvent.end_date
        )}
      </h1>
      <ToastContainer />
      <div className="mt-3  flex flex-col">
        <div
          style={{ fontFamily: "Brown, sans-serif" }}
          className=" border-b  rounded-[4px] text-left   opacity-90  tracking-[.50px]  text-[12px] text-[#222222] p-2 flex justify-between border border-gray-300 "
        >
          <p>
            From<br></br>
            {formatDate(datadetailedEvent.start_date)}
          </p>
          <p>
            To<br></br>
            {formatDate(datadetailedEvent.end_date)}
          </p>
        </div>
        <div
          style={{ fontFamily: "Brown, sans-serif" }}
          className=" border-b  text-left   opacity-80  tracking-[.50px]  text-[12px] text-[#222222] p-2 flex justify-between border border-gray-300 "
        >
          <p>
            {datadetailedEvent?.guest != null ? "Guests" : "Enter No of Guest"}
            <br></br>
            {datadetailedEvent?.guest != null ? (
              datadetailedEvent.guest
            ) : (
              <input
                onChange={handleUser}
                ref={userSeats}
                className="outline-none border border-gray-400 pl-[4px] py-[2px] mr-1 mt-1"
                type="number"
                placeholder="Guest"
              />
            )}{" "}
            Adults
          </p>
        </div>
        {check === "favorite" || check === "remove" || check === "top" ? (
          <div className="flex flex-col">
            <p
              style={{ fontFamily: "Brown, sans-serif" }}
              className="   text-left   opacity-60  tracking-[.50px]  text-[14px] text-[#222222] flex justify-between mt-[8px] "
            >
              {seat} seats available <span>${amount}</span>
            </p>
            <button
              onClick={() => handleReserveMySeat(datadetailedEvent)}
              style={{ fontFamily: "BrownLight, sans-serif" }}
              className="w-full text-[#ffffff] rounded-[4px] text-[14px] mt-[10px] px-[24px] py-[8px] bg-[#222222] flex items-center justify-center text-center"
            >
              Reserve my seat
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
