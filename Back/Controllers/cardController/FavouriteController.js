const pool = require("../../Config/database");
require("dotenv").config();


const FavouriteController = async (req, res) => {
  const {cardId ,userId } = req.body;
  const query=`INSERT INTO user_favorite_events (user_id, card_id) VALUES ($1, $2)`;
  await pool.query(query,[userId,cardId]);
};

module.exports = FavouriteController;
