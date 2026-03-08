const express = require("express");

const joinRouter = express.Router();

const joinController = require("../controllers/joinController");
joinRouter.get("/", joinController.getJoin);
// add an item in join
joinRouter.post("/", joinController.addJoin);
// delete an item in join
joinRouter.delete("/:id", joinController.deleteJoin);
module.exports = joinRouter;
