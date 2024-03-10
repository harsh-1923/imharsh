import React, { useState, useEffect } from "react";
import gsap from "gsap";
import "./AssistantChat.css";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import ChatServices from "../../Services/ChatServices";
import Skeleton from "@mui/material/Skeleton";

const Suggestions = ({ handler, list }) => {
  console.log(handler);
  return (
    <div className="suggestions">
      {list.map((suggestion, index) => {
        return (
          <div
            onClick={() => handler(suggestion.question)}
            key={index}
            className="assist-suggestion"
          >
            {suggestion.title}
          </div>
        );
      })}
    </div>
  );
};

const QuestionDisplay = ({ question }) => {
  // const [questionToDisplay, setQuestionToDisplay] = useState("");
  // useEffect(() => {
  //   let interval;

  //   const animateQuestion = () => {
  //     const words = question.split(" ");
  //     let index = 0;
  //     interval = setInterval(() => {
  //       if (index < words.length) {
  //         setQuestionToDisplay(
  //           (prevQuestion) =>
  //             prevQuestion + (prevQuestion ? " " : "") + words[index]
  //         );
  //         index++;
  //       } else {
  //         clearInterval(interval);
  //       }
  //     }, 1000); // Adjust the interval as needed (milliseconds)
  //   };

  //   animateQuestion();

  //   // Clean up the interval on unmount
  //   return () => clearInterval(interval);
  // }, [question]);

  return (
    <div className="question">
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
    { question: "Tell me about your experience", title: "Experience" },
    { question: "Tell me about your experience", title: "Experience" },
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
        width: "20px",
        height: "20px",
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

  const askSuggestedQuestion = async (askedQuestion) => {
    if (askedQuestion === null) return;
    setAnswer(null);

    if (firstQuesAsked === false) animateView();
    setDisplayQUestion(askedQuestion);
    setFetchingRes(true);

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
    const details = { chatID, question: askedQuestion };
    const response = await ChatServices.ask(details);
    console.log(response.answerObj);
    setFetchingRes(false);
    setAnswer(response.answerObj);
  };

  const ask = async (e, askedQuestion) => {
    setAnswer(null);
    animateView();
    if (askedQuestion) {
      setQuestion(askedQuestion);
    }
    if (question == null || question == "") return;
    setFetchingRes(true);
    setDisplayQUestion(question);
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

      {!fetchingRes && (
        <div className="assist-suggestions-wrap">
          {suggestions.map((suggestion, index) => {
            return (
              <div
                onClick={() => askSuggestedQuestion(suggestion.question)}
                key={index}
                className="assist-suggestion"
              >
                {suggestion.title}
              </div>
            );
          })}
        </div>
      )}
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
            onClick={(e) => ask(e)}
            fontSize="small"
            style={{ paddingLeft: "2px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AssistantChat;
