const pool = require("../../Config/database");
require("dotenv").config();


const FeedBackController=async(req,res)=>{
    const {cardId,rating,user_feedback,user_name}=req.body;

    const card_id=parseInt(cardId);
    const userRating=parseInt(rating);

    try {
        const feedBackQuery=`INSERT INTO feedback (card_id,user_name,user_feedback,rating) VALUES ($1,$2,$3,$4);`;
        await pool.query(feedBackQuery,[card_id,user_name,user_feedback,userRating]);
        res.status(201).json({sucess:true,message:"feedback added to table"});
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }

}

module.exports=FeedBackController;