import React, { useState } from "react";
import "./Play.css";
import MenuIcon from "@mui/icons-material/Menu";

import SideNav from "../../component/play/SideNav/SideNav";
import MainContent from "../../component/play/MainContent/MainContent";
import GrowingBorder from "../../component/play/ui/GrowingBorder/GrowingBorder";

const Play = () => {
  const [selected, setSelected] = useState(-1);

  return (
    <div className="play-wrap">
      <div className="play-header-wrap">
        <div className="scrible-logo-wrap">
          <MenuIcon className="menu-icon" />
          <h3 className="scrible-logo-text">ScribleUI</h3>
        </div>
      </div>
      <GrowingBorder color={"white"} />
      <div className="play-cont-wrap">
        <SideNav setSelected={setSelected} selected={selected} />
        <MainContent selected={selected} />
      </div>
    </div>
  );
};

export default Play;
