import React from "react";
import "./FAQ.css";

const FAQs = [
  {
    question: "Am I looking for opportunities",
    answer: "Yes mfiosHD FHASDHFLJAHSD JFHJK",
  },
  {
    question: "Am I looking for opportunities",
    answer: "Yes mfiosHD FHASDHFLJAHSD JFHJK",
  },
  {
    question: "Am I looking for opportunities",
    answer: "Yes mfiosHD FHASDHFLJAHSD JFHJK",
  },
  {
    question: "Am I looking for opportunities",
    answer: "Yes mfiosHD FHASDHFLJAHSD JFHJK",
  },
  {
    question: "Am I looking for opportunities",
    answer: "Yes mfiosHD FHASDHFLJAHSD JFHJK",
  },
];

const FAQItem = ({ item }) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div className="faq-item-wrap">
      <div
        onClick={() => setExpanded(!expanded)}
        className="faq-question
      "
      >
        {item.question}
      </div>
      <div
        data-state={`${expanded ? "collapsed" : "expanded"}`}
        className="faq-answer basic-text"
      >
        {item.answer}
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="faq-section-wrap">
      <div className="faq-left">left</div>
      <div className="faq-right">
        {FAQs.map((faq, index) => {
          return <FAQItem index={index} item={faq} />;
        })}
      </div>
    </div>
  );
};

export default FAQ;
