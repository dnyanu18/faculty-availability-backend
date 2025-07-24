const MeetingRequest = require("../models/MeetingRequest");

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
