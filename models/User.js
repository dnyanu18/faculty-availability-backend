const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ["Teacher", "Student"], default: "Student" }
});

module.exports = mongoose.model("User", userSchema);
