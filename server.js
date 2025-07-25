/*const express = require("express");
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
*/
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const statusRoutes = require("./routes/statusRoutes");
const meetingRoutes = require("./routes/meetingRoutes");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/status", statusRoutes);
app.use("/api/meeting", meetingRoutes);

app.get("/", (req, res) => res.send("Faculty Availability API"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
