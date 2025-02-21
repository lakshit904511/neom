require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session=require('express-session');
const carddetailsRoutes = require("./Routes/cardDetailsRoute.js");
const googleAuthRoutes=require('./Routes/AuthenticationRoutes/googleAuthRoute.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, 
  })
);


app.use(passport.initialize());
app.use(passport.session());



app.use("/auth",googleAuthRoutes);
app.use("/details", carddetailsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
