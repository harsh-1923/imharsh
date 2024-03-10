import React, { useState, useEffect } from "react";
import gsap from "gsap";
import "./AssistantChat.css";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import ChatServices from "../../Services/ChatServices";
import Skeleton from "@mui/material/Skeleton";

const Suggestions = ({ list }) => {
  return (
    <div className="suggestions">
      {list.map((suggestion, index) => {
        return (
          <div key={index} className="assist-suggestion">
            {suggestion.title}
          </div>
        );
      })}
    </div>
  );
};

const QuestionDisplay = ({ question }) => {
  return (
    <div>
      <p className="basic-text">{question}</p>
    </div>
  );
};

const AssistantChat = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [firstQuesAsked, setFirstQuesAsked] = useState(false);
  const [question, setQuestion] = useState();
  const [displayQuestion, setDisplayQUestion] = useState("");
  const [answer, setAnswer] = useState();
  const [fetchingRes, setFetchingRes] = useState(false);
  const suggestions = [
    { question: "Tell me something about yourself", title: "Surprise me!" },
    { question: "Where did you graduate from?", title: "Education" },
    { question: "What are your skills", title: "Skills" },
    { question: "Tell me about your experience", title: "Experience" },
    { question: "Tell me about your hobbies", title: "Hobbies" },
  ];

  const handleQuestionChange = (e) => {
    e.preventDefault();
    setQuestion(e.target.value);
  };

  const animateView = () => {
    console.log(firstQuesAsked);
    if (firstQuesAsked === true) return;

    gsap.to(
      ".assist-logo-wrap",
      {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        duration: 1,
        ease: "power1.out",
      },
      "s"
    );

    gsap.to(
      ".assist-main",
      {
        width: "100%",
        duration: 1,
        ease: "power1.out",
        onComplete: () => {
          gsap.to(".assistant-welcome-banner", {
            opacity: 0,
            duration: 0.3,
            ease: "power1.out",
            onComplete: () => {},
          });
        },
      },
      "s"
    );

    setFirstQuesAsked(true);
  };

  const ask = async (e, question) => {
    console.log("Clicked ask");
    animateView();
    if (question == null || question == "") return;
    setFetchingRes(true);
    setDisplayQUestion(question);
    // document.getElementsByClassName("question-input").set;
    var chatID = localStorage.getItem("chatID");
    if (!chatID) {
      alert("Encountered a problem.Fixing it");
      await initChat();
      chatID = localStorage.getItem("chatID");
    }

    if (!chatID) {
      alert("Encountered a problem. Please retry");
      return;
    }
    const details = { chatID, question };
    const response = await ChatServices.ask(details);
    console.log(response.answerObj);
    setFetchingRes(false);
    setAnswer(response.answerObj);
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
    if (connection.error === true) {
      newChat();
    }
  };

  useEffect(() => {
    init();
    setIsLoading(false);
  }, []);

  return (
    <div className="assist-wrap">
      <div className="assist-response-wrap">
        <div className="assist-logo-wrap"></div>
        <div className="assist-main">
          {firstQuesAsked ? (
            <>
              <QuestionDisplay question={displayQuestion} />

              {answer ? <p>{answer.text}</p> : <Skeleton />}
            </>
          ) : (
            <>
              <div className="assistant-welcome-banner">
                <h1 className="welcome-tag">
                  Ask me <br /> anything
                </h1>
                <p className="basic-text">Built with Human Intelligence</p>
                <p className="basic-text">Powered by Artificial Intelligence</p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="assist-suggestions-wrap">
        {!fetchingRes && <Suggestions list={suggestions} />}
      </div>
      <div
        data-state={`${fetchingRes ? "disabled" : "enabled"}`}
        className="assist-input-wrap"
      >
        <input
          className="question-input"
          placeholder="What music are you listening to right now?"
          onChange={(e) => handleQuestionChange(e)}
        />
        <div className="assist-button">
          <SendRoundedIcon
            onClick={(e) => ask(e, question)}
            fontSize="small"
            style={{ paddingLeft: "2px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AssistantChat;
