const Join = require("../models/joinModel");

exports.getJoin = async (req, res, next) => {
  const myJoin = await Join.find();

  res.status(200).json({
    status: "success",
    results: myJoin.length,
    data: {
      join: myJoin,
    },
  });
};
// add an item in Join
exports.addJoin = async (req, res) => {
  try {
    const join = new Join({
      name: req.body.name,
      phone: req.body.phone,
      course: req.body.course,
      shift: req.body.shift,
      message: req.body.message,
    });

    const newItem = await join.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteJoin = async (req, res, next) => {
  const itemId = req.params.id;
  const deletedItem = await Join.findByIdAndDelete(itemId);
  if (!deletedItem) {
    return res.status(404).json({
      status: "fail",
      message: "Item not found",
    });
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
};
