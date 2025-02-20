require("dotenv").config();
const express = require("express");
const cors = require('cors');
const carddetailsRoutes=require('./Routes/cardDetailsRoute.js')

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.json());
app.use(cors());

app.use("/details", carddetailsRoutes); 

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
