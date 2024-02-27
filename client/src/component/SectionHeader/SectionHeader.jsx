import React from "react";
import "./SectionHeader.css";

const SectionHeader = ({ header = "Section Header" }) => {
  return (
    <div className="section-header-wrap">
      <p>{header}</p>
    </div>
  );
};

export default SectionHeader;
