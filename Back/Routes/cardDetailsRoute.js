const express = require("express");
const { carddetails } = require("../Controllers/carddetails.js");  

const router = express.Router();

// Define routes
router.get("/carddetails", carddetails);

module.exports = router;
