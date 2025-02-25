require("dotenv").config();
const passport = require("passport");
const pool = require("../../Config/database");
const jwt = require("jsonwebtoken");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
console.log("this is controller file");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log("Access Token:", accessToken);
      console.log("User Profile:", profile);

      try {
        const email_id = profile.emails[0].value;
        const name = profile.displayName;
        const dob = "2003-03-11";
        const mob = 9045111609;

        // Check if the user exists
        const query1 = `SELECT * FROM users WHERE email_id = $1;`;
        let user = await pool.query(query1, [email_id]);

        if (user.rows.length === 0) {
          // console.log("User not found, creating new entry...");

          // Insert new user
          const query2 = `INSERT INTO users (name, email_id, date_of_birth, mobile_no) VALUES ($1, $2, $3, $4) RETURNING *;`;
          user = await pool.query(query2, [name, email_id, dob, mob]);
        }

        // console.log("User found:", user.rows[0]);

        return done(null, user.rows[0]);
      } catch (error) {
        console.error("Error in Google authentication:", error);
        return done(error, null);
      }
    }
  )
);

module.exports.googleAuthController = passport.authenticate("google", {
  scope: ["profile", "email"],
  session: false,
});

module.exports.googleAuthControllerCallback = (req, res, next) => {
  passport.authenticate(
    "google",
    { failureRedirect: "/", session: false },
    (err, user) => {
      // console.log("callback", user);

      if (err || !user) {
        return res.redirect("/");
      }

      const token = jwt.sign(
        { id: user.user_id, email: user.email_id },
        process.env.JWT_SECRET,
        { expiresIn: "14d" }
      );

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: false,
          sameSite: "Strict",
          maxAge: 5 * 5 * 1000,
        })
        .redirect(`${process.env.FRONTEND_URL}/`);
    }
  )(req, res, next);
};

module.exports.verifyUserController = async (req, res) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.json({ authenticated: false, message: "token not found" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const getUserQuery = `SELECT * FROM users WHERE email_id = $1;`;
    const loggedUser = await pool.query(getUserQuery, [decoded.email]);

    if (loggedUser.rows.length === 0) {
      return res.json({ authenticated: false, message: "User not found" });
    }

    const userID = loggedUser.rows[0].user_id;
    console.log("inside userid", userID);

    const queryFullData = `
      WITH user_cards AS (
        SELECT DISTINCT card_id FROM user_attended_events WHERE user_id = $1
        UNION
        SELECT DISTINCT card_id FROM user_schedule_events WHERE user_id = $1
        UNION
        SELECT DISTINCT card_id FROM user_favorite_events WHERE user_id = $1
      )
      SELECT 
          c.*, 
          r.*, 
          l.*, 
          e.*, 
          ex.*
      FROM cardDetails c
      LEFT JOIN reviewEvents r ON c.id = r.review_event_id
      LEFT JOIN locationEvents l ON c.id = l.location_event_id
      LEFT JOIN eventTypes e ON c.id = e.event_type_id
      LEFT JOIN experienceEvents ex ON c.id = ex.experience_id
      WHERE c.id IN (SELECT card_id FROM user_cards);
    `;

    const fullData = await pool.query(queryFullData, [userID]);
    // console.log(fullData.rows);

    const favQuery = `SELECT 
    c.*, 
    r.*, 
    l.*, 
    e.*, 
    ex.*
FROM user_favorite_events ufe
JOIN cardDetails c ON ufe.card_id = c.id
LEFT JOIN reviewEvents r ON c.id = r.review_event_id
LEFT JOIN locationEvents l ON c.id = l.location_event_id
LEFT JOIN eventTypes e ON c.id = e.event_type_id
LEFT JOIN experienceEvents ex ON c.id = ex.experience_id
WHERE ufe.user_id = $1;
`;
    const favouriteEvents = await pool.query(favQuery, [userID]);

    const attendQuery = `SELECT 
    c.*, 
    r.*, 
    l.*, 
    e.*, 
    ex.*
FROM user_attended_events uae
JOIN cardDetails c ON uae.card_id = c.id
LEFT JOIN reviewEvents r ON c.id = r.review_event_id
LEFT JOIN locationEvents l ON c.id = l.location_event_id
LEFT JOIN eventTypes e ON c.id = e.event_type_id
LEFT JOIN experienceEvents ex ON c.id = ex.experience_id
WHERE uae.user_id = $1;
`;
    const attendedEvents = await pool.query(attendQuery, [userID]);

    const scheduleQuery = `SELECT 
    c.*, 
    r.*, 
    l.*, 
    e.*, 
    ex.*
FROM user_schedule_events usev
JOIN cardDetails c ON usev.card_id = c.id
LEFT JOIN reviewEvents r ON c.id = r.review_event_id
LEFT JOIN locationEvents l ON c.id = l.location_event_id
LEFT JOIN eventTypes e ON c.id = e.event_type_id
LEFT JOIN experienceEvents ex ON c.id = ex.experience_id
WHERE usev.user_id = $1;
`;
    const scheduledEvents = await pool.query(scheduleQuery, [userID]);

    return res.json({
      authenticated: true,
      user: loggedUser.rows[0],
      cardData: fullData.rows,
      attendedData: attendedEvents.rows,
      scheduledData: scheduledEvents.rows,
      favouriteData: favouriteEvents.rows,
    });
  } catch (error) {
    console.error("Error executing query:", error);
    return res.json({ authenticated: false, message: "internal error" });
  }
};
