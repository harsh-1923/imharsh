import React from "react";
import "./Components.css";

const Components = () => {
  return (
    <div className="components-wrap">
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
      <div className="component-hero-ctr">
        <h1 className="component-header">
          New components <br /> every week
        </h1>
      </div>
    </div>
  );
};

export default Components;
