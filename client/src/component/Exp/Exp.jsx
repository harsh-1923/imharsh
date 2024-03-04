import React from "react";
import "./Exp.css";
import { motion, AnimatePresence } from "framer-motion";

const Exp = () => {
  //   const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="exp-wrap" data-state={`${open ? "open" : "closed"}`}>
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
              transition={{ duration: 0.2, type: "spring" }}
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

export default Exp;
