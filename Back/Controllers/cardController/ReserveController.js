const pool = require("../../Config/database");
require("dotenv").config();


const ReserveController = async (req, res) => {
  const {cardId ,userId, seat } = req.body;

  console.log("reserve controller");
  console.log(cardId,userId,seat);
  const query=`INSERT INTO user_schedule_events (user_id, card_id, status, guest) VALUES ($1, $2, $3, $4) ON CONFLICT (user_id, card_id) DO NOTHING;`;
  await pool.query(query,[userId,cardId,"Scheduled", seat]);
  res.status(201).json({success:true,message:"entry added to schedculed card"});
};

module.exports = ReserveController;