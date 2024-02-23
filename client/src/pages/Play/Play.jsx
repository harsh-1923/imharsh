import React, { useEffect, useRef } from "react";
import "./Play.css";
import ThatUI from "../../component/play/ScribleUIComponents/ThatUI/ThatUI";
import Credits from "../../component/play/ScribleUIComponents/Credits/Credits";
import { useNavigate } from "react-router-dom";
import FAQSection from "../../component/play/FAQ/FAQSection";
import AboutScrible from "../../component/play/ScribleUIComponents/AboutScrible/AboutScrible";

const Play = () => {
  const navigate = useNavigate();
  return (
    <div className="play-wrap">
      <div className="scrible-nav-wrap">
        <h3 onClick={() => navigate("")} className="scrible-logo-text">
          ScribleUI
        </h3>
        <button className="transparent-button">Components</button>
      </div>
      <div className="hero-ctr">
        <button onClick={() => navigate("/changelog")} className="glass-button">
          Change Logs
        </button>
        <h1 className="scrible-hero-text capitalize hero-header">
          Demystifying <br /> Web Magic
        </h1>
        <p className="main-subheader scrible-subheader">
          The best from the web. Broken down and recreated
        </p>

        <button className="cta-btn hero-cta">Get a custom component</button>
      </div>

      <Credits />
      <AboutScrible />

      <div className="empty-fillers"></div>
      <div className="empty-fillers"></div>

      <ThatUI />
      <FAQSection />

      <div className="fillers"></div>
    </div>
  );
};

export default Play;
