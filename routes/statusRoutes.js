const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const { updateStatus, getStatuses } = require("../controllers/statusController");

router.post("/status", auth, updateStatus);
router.get("/status", getStatuses);

module.exports = router;
