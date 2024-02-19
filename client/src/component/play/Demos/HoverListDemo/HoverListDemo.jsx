import React from "react";
import "./HoverList.css";
import DemoTitle from "../../DemoComponents/DemoTitle/DemoTitle";
import HoverList from "../../ui/HoverList/HoverList";

const data = [
  { title: "Serene Sunshine", location: "Germany" },
  { title: "Tranquil Meadows", location: "France" },
  { title: "Peaceful Forest", location: "Canada" },
  { title: "Calm Waters", location: "Australia" },
  { title: "Quiet Mountains", location: "Switzerland" },
  { title: "Relaxing Beach", location: "Maldives" },
];
const HoverListDemo = () => {
  return (
    <div className="demo-wrapper">
      <DemoTitle
        title={"Animated Hover List Effect"}
        desc={"Highlighted list item on hover"}
        details={[
          {
            detail: "Inspiration: Self Experiment",
            // link: "https://refire.heycusp.com/#:~:text=1-,Constant,-Evolution",
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

      <HoverList
        data={data}
        primaryColor={"#bbd0ff"}
        secondaryColor={"#757bc8"}
      />
    </div>
  );
};

export default HoverListDemo;
