const pool = require("../Config/database");

const getAllCardDetails = async () => {
  const query = `
        SELECT 
            c.*,  
            re.review_desc, 
            le.location_title, 
            le.location_desc, 
            et.event_type_title, 
            et.event_type_desc, 
            ee.experience_title,
            ee.experience_desc  
        FROM carddetails c
        LEFT JOIN reviewevents re ON c.id = re.review_event_id
        LEFT JOIN locationevents le ON c.id = le.location_event_id
        LEFT JOIN eventtypes et ON c.id = et.event_type_id
        LEFT JOIN experienceevents ee ON c.id = ee.experience_id;
    `;
  return await pool.query(query);
};

const getFavoriteEvents = async (userID) => {
  const query = `
        SELECT 
            c.*, 
            r.*, 
            l.*, 
            e.*, 
            ex.*
        FROM user_favorite_events ufe
        JOIN carddetails c ON ufe.card_id = c.id
        LEFT JOIN reviewevents r ON c.id = r.review_event_id
        LEFT JOIN locationevents l ON c.id = l.location_event_id
        LEFT JOIN eventtypes e ON c.id = e.event_type_id
        LEFT JOIN experienceevents ex ON c.id = ex.experience_id
        WHERE ufe.user_id = $1;
    `;
  return await pool.query(query, [userID]);
};

const getAttendedEvents = async (userID) => {
  const query = `
       SELECT 
    c.*, 
    usev.status,  
    usev.guest, 
    r.*, 
    l.*, 
    e.*, 
    ex.*
    FROM user_attended_events usev
    JOIN carddetails c ON usev.card_id = c.id
    LEFT JOIN reviewevents r ON c.id = r.review_event_id
    LEFT JOIN locationevents l ON c.id = l.location_event_id
    LEFT JOIN eventtypes e ON c.id = e.event_type_id
    LEFT JOIN experienceevents ex ON c.id = ex.experience_id
    WHERE usev.user_id = $1;
    `;
  return await pool.query(query, [userID]);
};

const getScheduledEvents = async (userID) => {
  const query = `
           SELECT 
    c.*, 
    usev.status,  
    usev.guest, 
    r.*, 
    l.*, 
    e.*, 
    ex.*
    FROM user_schedule_events usev
    JOIN carddetails c ON usev.card_id = c.id
    LEFT JOIN reviewevents r ON c.id = r.review_event_id
    LEFT JOIN locationevents l ON c.id = l.location_event_id
    LEFT JOIN eventtypes e ON c.id = e.event_type_id
    LEFT JOIN experienceevents ex ON c.id = ex.experience_id
    WHERE usev.user_id = $1;
    `;
  return await pool.query(query, [userID]);
};

const getServerRecommendedEvents = async () => {
  const query = `
        SELECT 
            c.*,  
            r.id AS recommend_event_id, 
            re.review_desc, 
            le.location_title, 
            le.location_desc, 
            et.event_type_title, 
            et.event_type_desc, 
            ee.experience_title,
            ee.experience_desc
        FROM recommenddata_events r
        JOIN carddetails c ON r.card_id = c.id
        LEFT JOIN reviewevents re ON c.id = re.review_event_id
        LEFT JOIN locationevents le ON c.id = le.location_event_id
        LEFT JOIN eventtypes et ON c.id = et.event_type_id
        LEFT JOIN experienceevents ee ON c.id = ee.experience_id;
    `;
  return await pool.query(query);
};

const getServerTopEvents = async () => {
  const query = `
    SELECT 
    c.*,  
    r.id AS top_event_id,  

    re.review_desc, 
    le.location_title, 
    le.location_desc, 
    et.event_type_title, 
    et.event_type_desc, 
    ee.experience_title,
    ee.experience_desc

    FROM top_events r
    JOIN carddetails c ON r.card_id = c.id
    LEFT JOIN reviewevents re ON c.id = re.review_event_id
    LEFT JOIN locationevents le ON c.id = le.location_event_id
    LEFT JOIN eventtypes et ON c.id = et.event_type_id
    LEFT JOIN experienceevents ee ON c.id = ee.experience_id
    ORDER BY r.id ASC; 
    `;
  return await pool.query(query);
};

const getProfileQuestions = async () => {
  const query = `SELECT * FROM profile_questions;`;
  return await pool.query(query);
};

module.exports = {
  getAllCardDetails,
  getFavoriteEvents,
  getAttendedEvents,
  getScheduledEvents,
  getServerRecommendedEvents,
  getServerTopEvents,
  getProfileQuestions,
};
