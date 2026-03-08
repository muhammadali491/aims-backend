const Message = require("../models/messageModel");

exports.getMessage = async (req, res, next) => {
  const myMessage = await Message.find();

  res.status(200).json({
    status: "success",
    results: myMessage.length,
    data: {
      message: myMessage,
    },
  });
};
// add an item in Message
exports.addMessage = async (req, res) => {
  try {
    const message = new Message({
      name: req.body.name,
      phone: req.body.phone,
      subject: req.body.subject,
      message: req.body.message,
    });

    const newItem = await message.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMessage = async (req, res, next) => {
  const itemId = req.params.id;
  const deletedItem = await Message.findByIdAndDelete(itemId);
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
