// routes/authRoutes.js
/*const express = require("express");
const router = express.Router();
const { signup, login } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
*/
const express = require("express");
const { login, register } = require("../controllers/authController");
const router = express.Router();

router.post("/login", login);
router.post("/register", register);

module.exports = router;
