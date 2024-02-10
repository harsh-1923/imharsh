import React from "react";
import "./SideNav.css";

const SideNavOption = ({ setSelected, option, value, selected }) => {
  const fw = selected == value ? "600" : "500";
  return (
    <div onClick={() => setSelected(value)} className="nav-option">
      <p style={{ fontWeight: fw }}>{option}</p>
    </div>
  );
};

const SideNav = ({ setSelected, selected }) => {
  return (
    <div className="sidenav-wrap">
      <div className="side-nav-logo">
        <h2 className="scrible-logo-text">ScribleUI</h2>
      </div>
      <SideNavOption
        setSelected={setSelected}
        option={"Reveal Text Aniamtion"}
        value={0}
        selected={selected}
      />
      <SideNavOption
        setSelected={setSelected}
        option={"Animated Button"}
        value={1}
        selected={selected}
      />
      <SideNavOption
        setSelected={setSelected}
        option={"Animated Divider"}
        value={2}
        selected={selected}
      />
      <SideNavOption
        setSelected={setSelected}
        option={"Spring Divider"}
        value={3}
        selected={selected}
      />
    </div>
  );
};

export default SideNav;
