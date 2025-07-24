const mongoose = require("mongoose");

const meetingRequestSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    status: { type: String, enum: ["Pending", "Accepted", "Rejected"], default: "Pending" },
    requestedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("MeetingRequest", meetingRequestSchema);
