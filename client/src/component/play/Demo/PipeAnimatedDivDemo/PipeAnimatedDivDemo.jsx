import React from "react";
import "./PipeAnimatedDiv.css";
import PipeAnimatedDiv from "../../ui/PipeAnimatedDiv/PipeAnimatedDiv";

const PipeAnimatedDivDemo = () => {
  return (
    <div className="demo-page-wrap">
      <div className="scrible-nav-wrap">
        <h3 onClick={() => navigate("")} className="scrible-logo-text">
          ScribleUI
        </h3>
        <button
          onClick={() => navigate("/components")}
          className="transparent-button"
        >
          Components
        </button>
      </div>
      <div className="pipe-div-hue"></div>

      <PipeAnimatedDiv />
    </div>
  );
};

export default PipeAnimatedDivDemo;
