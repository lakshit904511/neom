require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookie_parser=require('cookie-parser');

const carddetailsRoutes = require("./Routes/cardDetailsRoute.js");
const googleAuthRoutes=require('./Routes/AuthenticationRoutes/googleAuthRoute.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({origin:process.env.FRONTEND_URL, credentials: true }));
app.use(cookie_parser());
app.use(passport.initialize());



app.use("/auth",googleAuthRoutes);
app.use("/details", carddetailsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
