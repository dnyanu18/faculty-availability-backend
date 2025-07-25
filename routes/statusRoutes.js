/*const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const { updateStatus, getStatuses } = require("../controllers/statusController");

router.post("/status", auth, updateStatus);
router.get("/status", getStatuses);

module.exports = router;
*/
const express = require("express");
const { updateStatus, getAllStatuses } = require("../controllers/statusController");
const auth = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/update", auth, updateStatus);
router.get("/all", getAllStatuses);

module.exports = router;
