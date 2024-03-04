import React from "react";
import "./Navbar.css";
import ShareIOS from "../../assets/icons/ShareIOS.svg";

const Navbar = () => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div className="navbar-wrap">
      <h1 className="navbar-name">Harsh Sharma</h1>
      <div className="menu-wrapper">
        <div
          className="menu-icon"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          <div className="menu-icon-dot"></div>
          <div className="menu-icon-dot"></div>
          <div className="menu-icon-dot"></div>
        </div>
        <div
          className="menu-options-wrap"
          data-state={`${expanded ? "open" : "closed"}`}
        >
          <p>test1</p>
          <p>test1</p>
          <p>test1</p>
          <p>test1</p>
          <p>test1</p>
          <p>test1</p>
          <p>test1</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
