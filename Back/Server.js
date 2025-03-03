require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookie_parser=require('cookie-parser');

const googleAuthRoutes=require('./Routes/AuthenticationRoutes/googleAuthRoute.js');
const userVerifyRoutes=require('./Routes/userVerifyRoute/userRoute.js')
const signInRoutes=require('./Routes/SignInRoute/SignIn.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({origin:process.env.FRONTEND_URL, credentials: true }));
app.use(cookie_parser());
app.use(passport.initialize());



app.use("/auth",googleAuthRoutes);
app.use('/verify',userVerifyRoutes);
app.use('/user',signInRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
