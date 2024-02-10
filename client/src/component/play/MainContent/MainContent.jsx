import React from "react";
import "./MainContent.css";
import AnimatedButton from "../ui/AnimatedButton/AnimatedButton.jsx";
import RevealTextAnimation from "../ui/RevealTextAnimation/RevealTextAnimation.jsx";
import AnimatedDivider from "../ui/AnimatedDivider/AnimatedDivider.jsx";
import SpringDivider from "../ui/SpringDivider/SpringDivider.jsx";

const MainContent = ({ selected }) => {
  console.log(selected);
  const renderContent = (selected) => {
    // if (selected == 0) return <RevealTextAnimation />;
    // if (selected == 1) return <AnimatedButton />;
    // if (selected == 2) return <AnimatedDivider />;

    switch (selected) {
      case 0:
        return <RevealTextAnimation />;
      case 1:
        return <AnimatedButton />;
      case 2:
        return <AnimatedDivider />;
      case 3:
        return <SpringDivider />;
    }
  };

  return <div className="main-cont-wrap">{renderContent(selected)}</div>;
};

export default MainContent;
