import React from "react";
import "./SideNav.css";

const SideNavOption = ({ setSelected, option, value, selected }) => {
  const fw = selected == value ? "600" : "400";
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
        option={"Reveal Text Animation"}
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
      <SideNavOption
        setSelected={setSelected}
        option={"Name Logo"}
        value={4}
        selected={selected}
      />
      <SideNavOption
        setSelected={setSelected}
        option={"Grid Background"}
        value={5}
        selected={selected}
      />
      <SideNavOption
        setSelected={setSelected}
        option={"Dot Background"}
        value={6}
        selected={selected}
      />
      <SideNavOption
        setSelected={setSelected}
        option={"SVGPAth"}
        value={7}
        selected={selected}
      />
      <SideNavOption
        setSelected={setSelected}
        option={"Loader"}
        value={8}
        selected={selected}
      />
      <SideNavOption
        setSelected={setSelected}
        option={"Loaderssd"}
        value={9}
        selected={selected}
      />
    </div>
  );
};

export default SideNav;
