const express = require("express");

const messageRouter = express.Router();

const messageController = require("../controllers/messageController");
messageRouter.get("/", messageController.getMessage);
// add an item in join
messageRouter.post("/", messageController.addMessage);
// delete an item in join
messageRouter.delete("/:id", messageController.deleteMessage);
module.exports = messageRouter;
