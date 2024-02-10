import React, { useState } from "react";
import "./Play.css";
import SideNav from "../../component/play/SideNav/SideNav";
import MainContent from "../../component/play/MainContent/MainContent";

const Play = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="play-wrap">
      <SideNav setSelected={setSelected} selected={selected} />
      <MainContent selected={selected} />
    </div>
  );
};

export default Play;
