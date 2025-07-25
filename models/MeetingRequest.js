/*const mongoose = require("mongoose");

const meetingRequestSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: String, enum: ["Pending", "Accepted", "Rejected"], default: "Pending" },
    requestedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("MeetingRequest", meetingRequestSchema);

const mongoose = require("mongoose");

const meetingRequestSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  message: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("MeetingRequest", meetingRequestSchema);
*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingRequestSchema = new Schema(
  {
    teacherId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    studentId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
    rejectionReason: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MeetingRequest", meetingRequestSchema);
