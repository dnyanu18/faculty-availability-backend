/*const Status = require("../models/Status");

exports.updateStatus = async (req, res) => {
    const { status } = req.body;
    const teacherId = req.user.userId;

    const existing = await Status.findOne({ teacherId });
    if (existing) {
        existing.status = status;
        existing.updatedAt = Date.now();
        await existing.save();
    } else {
        await Status.create({ teacherId, status });
    }

    res.json({ message: "Status updated" });
};

exports.getStatuses = async (req, res) => {
    const statuses = await Status.find().populate("teacherId", "name email");
    res.json(statuses);
};
*/
const Status = require("../models/Status");

exports.updateStatus = async (req, res) => {
  const { availability } = req.body;
  const teacherId = req.user.id;

  const status = await Status.findOneAndUpdate(
    { teacherId },
    { availability, updatedAt: Date.now() },
    { new: true, upsert: true }
  );

  res.json(status);
};

exports.getAllStatuses = async (req, res) => {
  const statuses = await Status.find().populate("teacherId", "name email");
  res.json(statuses);
};

