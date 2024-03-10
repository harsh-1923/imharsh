const express = require("express");
const assistantChatRouter = express.Router();
const AssistantChatSchema = require("../Models/AssistantChatModel.js");
bodyParser = require("body-parser").json();
const uuid = require("uuid");

const { GoogleGenerativeAI } = require("@google/generative-ai");

const info =
  'You have to act as me and respond to questions based on the following information about me. My name is Harsh Sharma. I graduated from Jadavpur University where I did my B.E. in Production Engg. I have previously worked at Slang Labs as a Software Developer where I was working primarily on React, TypeScript, Tailwind CSS etc. At Slang Labs, I was working on Voice Assistants. I worked there from Sept 2022 till June 2023. Then I moved to Airbus as a Software Developer. Airbus I worked on Simulators that are used for research and development and pilot training. At Airbus I work on Java, Eclipse ECP, etc. Respond in stringified JSON Format only —no need to worry about the formatting of the JSON. The response should have two keys, "text" and "links". "text"  should have the answer in string format and "links"  should be an array of strings holding relevant links, if any, based on the question. \n For example, a sample response should look like {"text": "The capital of India is Delhi", "links" : []} for the question "What is the capital of Delhi". Make sure to stick to the format. There is no need to add or change the format in any way.';

assistantChatRouter.get("/test-deployment", (req, res) => {
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

assistantChatRouter.get("/establishConnection", async (req, res) => {
  const { chatID } = req.query;
  console.log(chatID);

  const chat = await AssistantChatSchema.findOne({ chatID });
  console.log(chat);
  if (!chat)
    return res.status(200).json({ message: "Chat not found", error: true });

  return res.status(200).json({ message: "Chat found", chatID, error: false });
});

assistantChatRouter.post("/init", (req, res) => {
  const ip = req.body.ip;
  const chatID = uuid.v4();
  var newChat = new AssistantChatSchema({
    chatID,
    ip,
    history: [
      {
        role: "user",
        parts: info,
      },
      {
        role: "model",
        parts: "Got it",
      },
    ],
  });

  newChat
    .save()
    .then((savedChat) => {
      return res
        .status(200)
        .json({ message: "Chat initiated", chatID, error: false });
    })
    .catch((err) => {
      console.log(err);
      return res
        .status(500)
        .json({ message: "Couldn't initate chat", error: true, err });
    });
});

assistantChatRouter.get("/all", (req, res) => {
  AssistantChatSchema.find()
    .then((chats) => {
      res.status(200).json({
        message: "Found chats",
        chats,
        count: chats.length,
        error: false,
      });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error fetching users", error: true, err });
    });
});

assistantChatRouter.post("/ask", async (req, res) => {
  const { question, chatID } = req.body;
  const MODEL_NAME = "gemini-1.0-pro";

  const genAI = new GoogleGenerativeAI(process.env.VITE_API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const chat = await AssistantChatSchema.findOne({ chatID });

  if (!chat) {
    return res.status(404).json({ error: true, message: "No chat found" });
  }

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 100,
  };

  const chatObj = model.startChat({
    generationConfig,
    history: chat.history,
  });

  const result = await chatObj.sendMessage(question);

  const answer = result.response.text();

  chat.history.push({ role: "user", parts: question });
  chat.history.push({ role: "model", parts: answer });

  await chat.save();
  const answerObj = JSON.parse(answer);
  return res.status(200).json({ answerObj, error: false });
});

assistantChatRouter.get("/chatHistory", async (req, res) => {
  const { chatID } = req.body;

  const chat = await AssistantChatSchema.findOne({ chatID });

  return res.status(200).json({ chat });
});
assistantChatRouter.get("/chatHistory/:chatID", async (req, res) => {
  const chatID = req.params.chatID;

  const chat = await AssistantChatSchema.findOne({ chatID });

  return res.status(200).json({ chat });
});

module.exports = assistantChatRouter;
