const pool = require("../Config/database");

module.exports.carddetails = async (req, res) => {
  try {
    const query = `
    SELECT cd.*, 
           re.review_desc,
           le.location_title, le.location_desc,
           et.event_type_title, et.event_type_desc,
           ee.experience_title, ee.experience_desc
    FROM cardDetails cd
    LEFT JOIN reviewEvents re ON cd.review_event = re.review_event_id
    LEFT JOIN locationEvents le ON cd.location_event = le.location_event_id
    LEFT JOIN eventTypes et ON cd.event_type = et.event_type_id
    LEFT JOIN experienceEvents ee ON cd.experience_event = ee.experience_id;
  `;
    const result = await pool.query(query);
    res.status(200).json(result.rows);
    console.log("data send to frontend");
  } catch (error) {
    console.error("Database Query Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
