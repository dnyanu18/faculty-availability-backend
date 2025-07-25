/*const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
    teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: String, enum: ["Available", "Busy", "In Lecture"] },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Status", statusSchema);
*/
const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  availability: { type: String, enum: ["available", "busy"], default: "available" },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Status", statusSchema);
