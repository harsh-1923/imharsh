import React, { useState, useEffect } from "react";
import gsap from "gsap";
import "./AssistantChat.css";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import ChatServices from "../../Services/ChatServices";
import Skeleton from "@mui/material/Skeleton";

const WelcomeBanner = () => {
  return (
    <div className="assistant-chat-welcome-banner">
      <h1 className="welcome-tag">
        Ask me <br /> anything
      </h1>
      <p className="basic-text">Would love to have a conversation with you.</p>
    </div>
  );
};

const ResponseDisplay = ({ answer }) => {
  console.log(typeof answer);
  return (
    <div className="assistant-chat-response-wrap outline">
      {/* <p className="basic-text">{text && text.text}</p> */}
    </div>
  );
};

const QuestionDisplay = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

const AssistantChat = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [firstQuesAsked, setFirstQuesAsked] = useState(false);
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  const [fetchingRes, setFetchingRes] = useState(false);
  const [displayQuestion, setDisplayQuestion] = useState();
  const [recievedResponse, setRecievedResponse] = useState(false);
  const suggestions = [
    { question: "Tell me something about yourself", title: "Surprise me!" },
    { question: "Where did you graduate from?", title: "Education" },
    { question: "What are your skills", title: "Skills" },
    { question: "Tell me about your experience", title: "Experience" },
    { question: "Tell me about your hobbies", title: "Hobbies" },
    { question: "Where do you live?", title: "Location" },
    { question: "What are your skills", title: "Skills" },
    { question: "Tell me about your experience", title: "Experience" },
    { question: "Tell me about your hobbies", title: "Hobbies" },
    { question: "Where do you live?", title: "Location" },
    { question: "What are your skills", title: "Skills" },
    { question: "Tell me about your experience", title: "Experience" },
    { question: "Tell me about your hobbies", title: "Hobbies" },
    { question: "Where do you live?", title: "Location" },
  ];

  const handleQuestionChange = (e) => {
    e.preventDefault();
    setQuestion(e.target.value);
  };

  const ask = async (e, question) => {
    e.preventDefault();
    setRecievedResponse(false);
    setFirstQuesAsked(true);
    setFetchingRes(true);
    setDisplayQuestion(question);
    //change the banner
    //flush the previous response
    if (!question || question === "") return;
    const chatID = localStorage.getItem("chatID");
    if (!chatID) {
      alert("Encountered a problem. Fixing it");
      await initChat();
    }
    const details = { chatID, question };
    const response = await ChatServices.ask(details);
    console.log(response.answer);
    const answerObj = JSON.parse(response.answer);
    console.log(answerObj);
    setFetchingRes(false);
    setAnswer(response);
    setRecievedResponse(true);
  };

  const newChat = async (chat) => {
    localStorage.removeItem("chatID");
    const newChat = await ChatServices.initChat();
    localStorage.setItem("chatID", newChat.chatID);
  };

  const init = async () => {
    const chatID = localStorage.getItem("chatID");
    if (!chatID) {
      newChat();
      return;
    }

    const connection = await ChatServices.establishConnection({ chatID });
    console.log(connection);
    if (connection.error === true) {
      newChat();
    }
  };

  useEffect(() => {
    init();
    setIsLoading(false);
  }, []);
  return (
    <div className="assistant-wrap">
      <div className="assistant-chat-section">
        {!firstQuesAsked && <WelcomeBanner />}

        {displayQuestion && <QuestionDisplay text={displayQuestion} />}

        {fetchingRes && (
          <Skeleton variant="rectangular" width={"100%"} height={60} />
        )}

        {recievedResponse && <ResponseDisplay answer={answer.answer} />}

        <div className="assistant-chat-input-wrap">
          <form className="assistant-form">
            <input
              onSubmit={(e) => ask(e, question)}
              onChange={(e) => handleQuestionChange(e)}
              type="text"
              className="assistant-chat-input"
              placeholder="Text Harsh"
            ></input>
            <SendRoundedIcon
              onClick={(e) => ask(e, question)}
              fontSize="medium"
              style={{ paddingTop: "3px" }}
            />
          </form>
        </div>
      </div>
      <div className="assistant-suggestion-section only-desktop">
        {suggestions.map((suggestion, i) => {
          return (
            <div
              key={i}
              onClick={() => ask(suggestion.question)}
              className="assistant-suggestion"
            >
              <p className="basic-text">{suggestion.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssistantChat;
