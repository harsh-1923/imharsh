import React, { useEffect, useRef } from "react";
import "./Play.css";
import gsap from "gsap";

const Play = () => {
  return (
    <div className="play-wrap">
      <div className="scrible-nav-wrap">
        <h3 className="scrible-logo-text">ScribleUI</h3>
        <button className="transparent-button">Components</button>
      </div>
      <div className="hero-ctr">
        <h1 className="scrible-hero-text capitalize hero-header">
          Demystifying <br /> Web Magic
        </h1>
        <p className="main-subheader scrible-subheader">
          The best from the web. Brokern down and recreated
        </p>
      </div>

      <div className="fillers"></div>
      <div className="fillers"></div>
      <div className="fillers"></div>
    </div>
  );
};

export default Play;
