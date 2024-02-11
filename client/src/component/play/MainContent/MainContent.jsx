import React from "react";
import "./MainContent.css";

import AnimatedButton from "../ui/AnimatedButton/AnimatedButton.jsx";
import RevealTextAnimation from "../ui/RevealTextAnimation/RevealTextAnimation.jsx";
import AnimatedDivider from "../ui/AnimatedDivider/AnimatedDivider.jsx";
import SpringDivider from "../ui/SpringDivider/SpringDivider.jsx";
import AnimatedNameLogo from "../ui/AnimatedNameLogo/AnimatedNameLogo.jsx";
import { GridBackground } from "../ui/GridBackground/GridBackground.jsx";
import DotBackground from "../ui/DotBackground/DotBackground.jsx";

// const Throttler = () => {
//   const [count, setCount] = React.useState(0);

//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>Click</button>
//     </>
//   );
// };

const MainContent = ({ selected }) => {
  console.log(selected);
  const renderContent = (selected) => {
    switch (selected) {
      case 0:
        return <RevealTextAnimation />;
      case 1:
        return <AnimatedButton />;
      case 2:
        return <AnimatedDivider />;
      case 3:
        return <SpringDivider width={"1000"} height={"25"} />;
      case 4:
        return <AnimatedNameLogo line1="Harsh Sharma" line2="Code by Harsh" />;
      case 5:
        return (
          <GridBackground>
            <RevealTextAnimation />
          </GridBackground>
        );
      case 6:
        return <DotBackground />;
    }
  };

  return <div className="main-cont-wrap">{renderContent(selected)}</div>;
};

export default MainContent;
