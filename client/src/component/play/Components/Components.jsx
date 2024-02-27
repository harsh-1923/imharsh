import React, { useState } from "react";
import "./Components.css";
import Refire from "../../../assets/images/ComponentClips/Refire.mov";
import { useNavigate } from "react-router-dom";

const components = [
  {
    name: "Refire's Indexed List",
    desc: "Animated Index that changes based on the users focus",
    date: "26th February 2024",
    videoUrl: Refire,
    link: "/components/animatedDiv",
  },
  {
    name: "Pipe's",
    desc: "Animated Index that changes based on the users focus",
    date: "26th February 2024",
    videoUrl: Refire,
    link: "/components/pipeDiv",
  },
];

const ComponentView = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(item.link)} className="comp-view">
      <video
        style={{ borderRadius: "10px 10px 0px 0px", overflow: "hidden" }}
        src={item.videoUrl}
        width={"100%"}
        autoPlay={true}
        loop={true}
        muted
      />
      <small className="comp-date">{item.date}</small>
      <h2>{item.name}</h2>
      <p>{item.desc}</p>
    </div>
  );
};

const Components = () => {
  const navigate = useNavigate();
  return (
    <div className="components-wrap">
      <div className="scrible-nav-wrap">
        <h3 onClick={() => navigate("/")} className="scrible-logo-text">
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

      <div className="comp-search-wrap">
        {components.map((comp, index) => (
          <div key={index} className="component-container">
            <ComponentView item={comp} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Components;
