import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div className="navbar-wrap">
      <h1 className="navbar-name">Harsh Sharma</h1>
      <div
        className="menu-icon"
        onClick={() => {
          console.log("click");
          setExpanded(!expanded);
        }}
      >
        <div className="menu-icon-dot"></div>
        <div className="menu-icon-dot"></div>
        <div className="menu-icon-dot"></div>
        <AnimatePresence>
          {expanded && (
            <motion.div
              key="modal"
              initial={{ height: 0, width: 0 }}
              animate={{ height: "auto", width: "100px" }}
              transition={{ duration: 0.1, type: "linear" }}
              exit={{ height: 0, width: 0 }}
              className="menu-option-wrap"
            >
              <p onClick={() => console.log("share was clicked")}>Share</p>
              <p onClick={() => console.log("Resume was clicked")}>Resume</p>
              <p onClick={() => console.log("Contact was clicked")}>Contact</p>
              <p onClick={() => console.log("About was clicked")}>About</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
