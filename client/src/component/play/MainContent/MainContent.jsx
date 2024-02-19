import React from "react";
import "./MainContent.css";
import RevealTextAnimation from "../ui/RevealTextAnimation/RevealTextAnimation";
import AnimatedButton from "../ui/AnimatedButton/AnimatedButton";
import SVGTrick from "../ui/SVGTrick/SVGTrick";
import AirbusConns from "../ui/AirbusConns/AirbusConns";
import ObserverDiv from "../ui/ObserverDiv/ObserverDiv";
import AnimatedDivIndex from "../ui/AnimatedDivIndex/AnimatedDivIndex";

import AnimatedIndexDevDemo from "../Demos/AnimatedIndexDivDemo/AnimatedIndexDivDemo.jsx";

const MainContent = ({ selected }) => {
  const renderDemo = () => {
    switch (selected) {
      // case -1:
      //   return <h1>Building</h1>;
      // case 0:
      //   return (
      //     <RevealTextAnimation>
      //       <h1>Reveals are cool</h1>
      //     </RevealTextAnimation>
      //   );
      // case 1:
      //   return <AnimatedButton />;
      // case 2:
      //   return <AirbusConns />;
      case 0:
        return <AnimatedIndexDevDemo />;
    }
  };
  return <div className="main-cont-wrap">{renderDemo(selected)}</div>;
};

export default MainContent;
