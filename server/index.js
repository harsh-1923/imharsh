require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
const dburl = require("./config.js").url;

app.get("/", (req, res) => {
  res.json("hello");
});

const assistantChatRouter = require("./Router/ChatAssistantRouter.js");
app.use("/api/v1/chat-assistant", assistantChatRouter);

mongoose.connect(dburl).then(() => {
  console.log("Connected bro");
});

app.listen(PORT, () => {
  console.log(`Listening tp ${PORT}`);
});
