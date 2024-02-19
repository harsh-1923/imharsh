import React from "react";
import "./MainContent.css";
import RevealTextAnimation from "../ui/RevealTextAnimation/RevealTextAnimation";
import AnimatedButton from "../ui/AnimatedButton/AnimatedButton";
import SVGTrick from "../ui/SVGTrick/SVGTrick";
import AirbusConns from "../ui/AirbusConns/AirbusConns";
import ObserverDiv from "../ui/ObserverDiv/ObserverDiv";
import AnimatedDivIndex from "../ui/AnimatedDivIndex/AnimatedDivIndex";

import AnimatedIndexDevDemo from "../Demos/AnimatedIndexDivDemo/AnimatedIndexDivDemo.jsx";
import ScrollFlipInfiniteText from "../ui/ScrollFlipInfiniteText/ScrollFlipInfiniteText.jsx";
import InfiniteSlidingTextDemo from "../Demos/InfiniteSlidingTextDemo/InfiniteSlidingTextDemo.jsx";
import HoverList from "../ui/HoverList/HoverList.jsx";
import HoverListDemo from "../Demos/HoverListDemo/HoverListDemo.jsx";
import ScribleUI from "../ScribleUI/ScribleUI.jsx";
import CubertoDesignList from "../ui/CurbertoDesignList/CubertoDesignList.jsx";
import CubertoDesignListDemo from "../Demos/CubertoDesignListDemo/CubertoDesignListDemo.jsx";

const MainContent = ({ selected }) => {
  const renderDemo = () => {
    switch (selected) {
      case -1:
        return <ScribleUI />;
      case 0:
        return <AnimatedIndexDevDemo />;
      case 1:
        return <InfiniteSlidingTextDemo />;
      case 2:
        return <HoverListDemo />;
      case 3:
        return <CubertoDesignListDemo />;
    }
  };
  return <div className="main-cont-wrap">{renderDemo(selected)}</div>;
};

export default MainContent;
