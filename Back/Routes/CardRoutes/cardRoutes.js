const express=require('express');
const favcardController=require('../../Controllers/cardController/FavouriteController');
const removeController=require('../../Controllers/cardController/RemoveController');
const ReserveController = require('../../Controllers/cardController/ReserveController');
const FeedBackController = require('../../Controllers/cardController/FeedBackController');

const router=express.Router();

router.post("/fav",favcardController);
router.post("/remove",removeController);
router.post("/reserve",ReserveController);
router.post("/feedback",FeedBackController);

module.exports=router;