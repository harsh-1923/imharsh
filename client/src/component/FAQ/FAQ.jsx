import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./FAQ.css";

const FAQList = [
  { question: "Am I looking for opportunities?", answer: "Yes" },
  //   { question: "Am I looking for opportunities?", answer: "Yes" },
  //   { question: "Am I looking for opportunities?", answer: "Yes" },
  //   { question: "Am I looking for opportunities?", answer: "Yes" },
  //   { question: "Am I looking for opportunities?", answer: "Yes" },
];

const FAQItem = ({ item }) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div className="faq-item-wrap">
      <div
        onClick={() => toggleClick(setExpanded(!expanded))}
        className="faq-question-wrap"
        style={{ height: `${expanded ? "auto" : "24px"}` }}
      >
        <p className="faq-ques basic-text">{item.question}</p>
        <ExpandMoreIcon fontSize="medium" />
      </div>
      <div className="ans-wrap">
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="faq-wrap">
      <div className="faq-left"></div>
      <div className="faq-right">
        {FAQList.map((faq, i) => {
          return <FAQItem item={faq} key={i} />;
        })}
      </div>
    </div>
  );
};

export default FAQ;
