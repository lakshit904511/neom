const express=require('express');
const signInController = require('../../Controllers/SignInController/SignInController');

const router=express.Router();

router.post("/signIn",signInController);


module.exports=router;