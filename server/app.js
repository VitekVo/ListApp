require("dotenv").config(); // Load environment variables
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

// Connect to MongoDB
connectDB();

// Routes
const listRoutes = require("./routes/listRoutes");
app.use("/api/lists", listRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
