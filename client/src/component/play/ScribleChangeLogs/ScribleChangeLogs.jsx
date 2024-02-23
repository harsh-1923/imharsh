import React from "react";
import "./ScribleChangeLogs.css";

const ScribleChangeLogs = () => {
  return (
    <div className="scrible-log-wrap">
      <div className="scrible-nav-wrap">
        <h3 className="scrible-logo-text">ScribleUI</h3>
        <button className="transparent-button">Components</button>
      </div>
      <div className="section-header cl-header">
        ScribleUI <br /> Change Logs
      </div>
      <div className="cl-section">
        <div className="main-knob"></div>
        <div className="master">
          <p>master</p>
        </div>
        <div className="cl-top-branch" />
      </div>
    </div>
  );
};

export default ScribleChangeLogs;
