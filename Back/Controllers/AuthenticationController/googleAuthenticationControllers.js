require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
console.log("this is controller file");


passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("Access Token:", accessToken);
      console.log("User Profile:", profile);
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports.googleAuthController = passport.authenticate("google", {
  scope: ["profile", "email"],
});

module.exports.googleAuthControllerCallback = (req, res, next) => {
    passport.authenticate("google", { failureRedirect: "/" }, (err, user) => {
      if (err || !user) {
        return res.redirect("/");
      }
      req.login(user, (loginErr) => {
        if (loginErr) {
          return next(loginErr);
        }
        console.log("Redirecting to Dashboard...");
        console.log(user);
        res.redirect(`${process.env.FRONTEND_URL}/dashboard`);
      });
    })(req, res, next);
  };
  
