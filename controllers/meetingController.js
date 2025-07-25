/*const MeetingRequest = require("../models/MeetingRequest");

exports.requestMeeting = async (req, res) => {
    const { teacherId } = req.body;
    const studentId = req.user.userId;

    await MeetingRequest.create({ studentId, teacherId });
    res.json({ message: "Meeting request sent" });
};

exports.getTeacherRequests = async (req, res) => {
    const teacherId = req.user.userId;
    const requests = await MeetingRequest.find({ teacherId }).populate("studentId", "name email");
    res.json(requests);
};

exports.updateMeetingRequest = async (req, res) => {
    const { requestId, status } = req.body;
    await MeetingRequest.findByIdAndUpdate(requestId, { status });
    res.json({ message: "Meeting request updated" });
};

const MeetingRequest = require("../models/MeetingRequest");

exports.sendRequest = async (req, res) => {
  const { teacherId, message } = req.body;
  const studentId = req.user.id;

  const request = await MeetingRequest.create({ teacherId, studentId, message });
  res.json(request);
};

exports.getRequestsForTeacher = async (req, res) => {
  const teacherId = req.user.id;

  const requests = await MeetingRequest.find({ teacherId }).populate("studentId", "name email");
  res.json(requests);
};
*/
const MeetingRequest = require("../models/MeetingRequest");

exports.sendRequest = async (req, res) => {
  const { teacherId, message } = req.body;
  const studentId = req.user.id;

  const request = await MeetingRequest.create({ teacherId, studentId, message });
  res.json(request);
};

exports.getRequestsForTeacher = async (req, res) => {
  const teacherId = req.user.id;

  const requests = await MeetingRequest.find({ teacherId }).populate("studentId", "name email");
  res.json(requests);
};

exports.approveRequest = async (req, res) => {
  try {
    const { requestId, status, reason } = req.body;

    const request = await MeetingRequest.findById(requestId);
    if (!request) return res.status(404).json({ message: "Request not found" });

    request.status = status;
    if (status === "rejected") {
      request.rejectionReason = reason || "No reason provided";
    }

    await request.save();
    res.json({ message: `Request ${status} successfully` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};