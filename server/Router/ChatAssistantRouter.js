const express = require("express");
const assistantChatRouter = express.Router();
const AssistantChatSchema = require("../Models/AssistantChatModel.js");
bodyParser = require("body-parser").json();

assistantChatRouter.post("/test-deployment", (req, res) => {
  const { message } = req.body;
  const ip = req.ip;
  console.log(ip);
  try {
    if (!message) {
      console.log("No Message found");
      return res.status(200).json({ status: "No Message found", ip });
    } else {
      console.log(message);
      return res.status(200).json({ status: "Message received", message, ip });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: err, ip });
  }
});

module.exports = assistantChatRouter;
