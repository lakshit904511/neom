const express=require('express');
const favcardController=require('../../Controllers/cardController/FavouriteController');
const removeController=require('../../Controllers/cardController/RemoveController');
const ReserveController = require('../../Controllers/cardController/ReserveController');

const router=express.Router();

router.post("/fav",favcardController);
router.post("/remove",removeController);
router.post("/reserve",ReserveController);

module.exports=router;