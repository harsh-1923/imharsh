const mongoose = require("mongoose");

const AssistantChatSchema = new mongoose.Schema({
  chatID: { type: String, required: true },
  ip: { type: String, required: false },
  history: [
    {
      role: { type: String, required: true },
      parts: { type: String, required: true },
    },
  ],
  timestamp: { type: String, required: true, default: Date.now() },
});

module.exports = mongoose.model("AssistantChatSchema", AssistantChatSchema);
