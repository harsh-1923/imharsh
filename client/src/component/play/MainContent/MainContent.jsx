import React from "react";
import "./MainContent.css";

import AnimatedButton from "../ui/AnimatedButton/AnimatedButton.jsx";
import RevealTextAnimation from "../ui/RevealTextAnimation/RevealTextAnimation.jsx";
import AnimatedDivider from "../ui/AnimatedDivider/AnimatedDivider.jsx";
import SpringDivider from "../ui/SpringDivider/SpringDivider.jsx";
import AnimatedNameLogo from "../ui/AnimatedNameLogo/AnimatedNameLogo.jsx";
import { GridBackground } from "../ui/GridBackground/GridBackground.jsx";
import DotBackground from "../ui/DotBackground/DotBackground.jsx";
import DemoViewer from "../DemoViewer/DemoViewer.jsx";
import AnimatedSVG from "../ui/AnimatedSVG/AnimatedSVG.jsx";
import PulsatingPath from "../ui/PulsatingPath/PulsatingPath.jsx";
import Loader from "../ui/Loader/Loader.jsx";
import HoverAnimation from "../ui/HoverAnimation/HoverAnimation.jsx";
import HoverList from "../ui/HoverList/HoverList.jsx";

const Title = ({ val, selected }) => {
  return (
    <div className="main-cont-title">
      <h1>Moving Border</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      <small>11th Feb, 2024 | 6:53 PM - Bangalore</small>
    </div>
  );
};

const MainContent = ({ selected }) => {
  console.log(selected);
  const renderContent = (selected) => {
    switch (selected) {
      case 0:
        return (
          <RevealTextAnimation>
            <h1>Jai Siya Ram</h1>
          </RevealTextAnimation>
        );
      case 1:
        return <AnimatedButton />;
      case 2:
        return (
          <AnimatedDivider>
            <AnimatedNameLogo line1="Harsh Sharma" line2="Code by Harsh" />
          </AnimatedDivider>
        );
      case 3:
        return <SpringDivider width={"1000"} height={"25"} />;
      case 4:
        return <AnimatedNameLogo line1="Harsh Sharma" line2="Code by Harsh" />;
      case 5:
        return (
          <GridBackground>
            <RevealTextAnimation>
              <h1>Grids are cool</h1>
            </RevealTextAnimation>
          </GridBackground>
        );
      case 6:
        return <DotBackground />;
      case 7:
        return <AnimatedSVG />;
      case 8:
        return <Loader />;
      case 9:
        return <HoverList />;
    }
  };

  return (
    <div className="main-cont-wrap">
      {/* <Title selected={selected} val={"hau"} /> */}
      {/* <DemoViewer selected={selected} /> */}
      {renderContent(selected)}
    </div>
  );
};

export default MainContent;
