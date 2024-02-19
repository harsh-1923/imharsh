import React from "react";
import "./DemoDetailsBox.css";

const DemoDetailsBox = ({ content, link }) => {
  const handleClick = () => {
    if (!link) return;
    window.open(link, "_blank");
  };
  return (
    <div onClick={handleClick} className="demo-details-wrap">
      {content}
    </div>
  );
};

export default DemoDetailsBox;
