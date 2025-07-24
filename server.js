const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const statusRoutes = require("./routes/statusRoutes");
const meetingRoutes = require("./routes/meetingRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("MongoDB connected");
});

app.use("/api", authRoutes);
app.use("/api", statusRoutes);
app.use("/api", meetingRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
