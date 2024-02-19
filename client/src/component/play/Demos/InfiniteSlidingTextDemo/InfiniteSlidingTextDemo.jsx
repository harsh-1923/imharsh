import React from "react";
import ScrollFlipInfiniteText from "../../ui/ScrollFlipInfiniteText/ScrollFlipInfiniteText";
import "./ScrollFlipInfiniteText.css";
import DemoTitle from "../../DemoComponents/DemoTitle/DemoTitle";

const InfiniteSlidingTextDemo = () => {
  return (
    <div className="scroll-flip-demo">
      <DemoTitle
        title={"Scroll Direction Aware Infinite Scroll"}
        desc={
          "An infinite scroll of a text that changes direction on change of scroll direction"
        }
        details={[
          {
            detail: "Inspiration",
            link: "https://dennissnellenberg.com/",
          },
          {
            detail: "Source Code",
            // link: "https://refire.heycusp.com/#:~:text=1-,Constant,-Evolution",
          },
          {
            detail: "Mon 19th Feb, 2024 | Bangalore, India",
          },
        ]}
      />
      <div className="scroll-flip-demo-ctr">
        <ScrollFlipInfiniteText content={"Harsh Sharma"} />
      </div>
    </div>
  );
};

export default InfiniteSlidingTextDemo;
