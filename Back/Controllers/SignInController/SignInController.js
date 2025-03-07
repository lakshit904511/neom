const bcrypt = require("bcrypt");
const pool = require("../../Config/database");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signInController = async (req, res) => {
  try {
    const { FullName, password, date_of_birth, Email, Contact } = req.body;

    const query1 = `SELECT * FROM users WHERE email_id = $1;`;
    let user = await pool.query(query1, [Email]);

    if (user.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const query2 = `
      INSERT INTO users (name, email_id, date_of_birth, mobile_no, password)
      VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;
    user = await pool.query(query2, [
      FullName,
      Email,
      date_of_birth,
      Contact,
      hashPassword,
    ]);

    // Generate JWT token
    const token = jwt.sign(
      { id: user.rows[0].user_id, email: user.rows[0].email_id },
      process.env.JWT_SECRET,
      { expiresIn: "14d" }
    );

     console.log("signing in token",token);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Strict",
      maxAge:  35 * 35 * 1000, 
    });

    res.status(201).json({
      message: "User registered successfully",
      redirectUrl: `${process.env.FRONTEND_URL}/`,
    });

  } catch (error) {
    console.error("Sign-in error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = signInController;
