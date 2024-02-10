import React from "react";
import "./MainContent.css";
import AnimatedButton from "../ui/AnimatedButton/AnimatedButton.jsx";
import RevealTextAnimation from "../RevealTextAnimation/RevealTextAnimation.jsx";

const MainContent = ({ selected }) => {
  console.log(selected);
  const renderContent = (selected) => {
    if (selected == 0) return <RevealTextAnimation />;
    if (selected == 1) return <AnimatedButton />;

    switch (selected) {
      case 0:
        return <RevealTextAnimation />;
      case 1:
        return <AnimatedButton />;
    }
  };

  return <div className="main-cont-wrap">{renderContent(selected)}</div>;
};

export default MainContent;
