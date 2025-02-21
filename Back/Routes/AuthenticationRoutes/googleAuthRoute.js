const express = require("express");
const {
  googleAuthController,
  googleAuthControllerCallback
} = require("../../Controllers/AuthenticationController/googleAuthenticationControllers");
const router = express.Router();
console.log("this is google router file");
router.get("/google", googleAuthController);
router.get("/google/callback",googleAuthControllerCallback);

module.exports = router;
