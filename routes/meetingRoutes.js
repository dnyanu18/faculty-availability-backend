/*const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const { requestMeeting, getTeacherRequests, updateMeetingRequest } = require("../controllers/meetingController");

router.post("/meeting", auth, requestMeeting);
router.get("/meeting", auth, getTeacherRequests);
router.put("/meeting", auth, updateMeetingRequest);

module.exports = router;
*/
const express = require("express");
const { sendRequest, getRequestsForTeacher } = require("../controllers/meetingController");
const auth = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/send", auth, sendRequest);
router.get("/teacher", auth, getRequestsForTeacher);

module.exports = router;
