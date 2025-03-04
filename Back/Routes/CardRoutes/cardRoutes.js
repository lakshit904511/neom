const express=require('express');
const favcardController=require('../../Controllers/cardController/FavouriteController');
const router=express.Router();

router.post("/fav",favcardController);


module.exports=router;