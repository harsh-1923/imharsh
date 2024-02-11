import React, { useState, useEffect, useRef } from "react";
import "./SpringDivider.css";

const SpringDivider = () => {
  // const path = useRef(null);

  let delta = 0;

  useEffect(() => {
    createPath(delta);
  }, []);

  const createPath = (delta) => {
    console.log("Jai Siya Ram");
    // path.current.setAttributeNS(
    //   null,
    //   "d",
    //   `M0 250 Q1000 ${250 + delta} 1000 250`
    // );
  };
  return (
    <div className="sd-wrap">
      {/* <div className="handler-wrap"></div> */}

      <svg width="1000" height="500" className="border">
        <path
          // d={`M0 250 Q 500 ${delta} 1000 250`}
          d="M0 250 Q500 250, 1000 250"
          fill="none"
          stroke="black"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default SpringDivider;
