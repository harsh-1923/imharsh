import React from "react";
import "./DemoTitle.css";
import DemoDetailsBox from "../DemoDetailsBox/DemoDetailsBox";
import GrowingBorder from "../../ui/GrowingBorder/GrowingBorder.jsx";

const DemoTitle = ({ title, desc, details }) => {
  return (
    <div className="demo-title-wrap">
      <h1 className="demo-title">{title}</h1>
      <p className="demo-desc">{desc}</p>
      <div className="demo-details">
        {details.map((detail, i) => {
          return <DemoDetailsBox content={detail.detail} link={detail.link} />;
        })}
        {/* <DemoDetailsBox
          content={"Inspiration"}
          link={"https://refire.heycusp.com/#:~:text=1-,Constant,-Evolution"}
        />
        <DemoDetailsBox content={"Source Code"} />
        <DemoDetailsBox content={"Mon 19th Feb, 2024 | Bangalore, India"} /> */}
      </div>
    </div>
  );
};

export default DemoTitle;
