import React, { useState } from "react";
import "./HoverList.css";
import { gsap } from "gsap";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const HoverList = ({ data, height, primaryColor, secondaryColor }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  data = [
    { title: "Serene Sunshine", location: "Germany" },
    { title: "Tranquil Meadows", location: "France" },
    { title: "Peaceful Forest", location: "Canada" },
    { title: "Calm Waters", location: "Australia" },
    { title: "Quiet Mountains", location: "Switzerland" },
    { title: "Relaxing Beach", location: "Maldives" },
  ];
  height = 80;
  (primaryColor = "white"), (secondaryColor = "black");

  const handleMouseEnter = (idx, ts) => {
    gsap.to(".highlight", {
      top: ts,
      duration: 0.2,
      ease: "power2.easeInOut",
    });
  };

  //   const handleMouseMove = (event) => {
  //     const { clientX, clientY } = event;
  //     const rect = event.currentTarget.getBoundingClientRect();
  //     const offsetX = clientX - rect.left;
  //     const offsetY = clientY - rect.top;
  //     setPos({ x: offsetX, y: offsetY });
  //   };
  //   const handleMouseLeave = (event) => {
  //     setPos({ x: 0, y: 0 });
  //   };
  return (
    <div
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseLeave={() => handleMouseLeave()}
      className="hover-list-wrap"
    >
      {data.map((item, idx) => {
        return (
          <div
            onMouseEnter={() => handleMouseEnter(idx, idx * height)}
            className="list-item-wrap"
            style={{ height, color: "white" }}
          >
            <span>
              <h1 style={{ color: "white" }}>{item.title}</h1>
            </span>
            <span>
              <h1>{item.location}</h1>
            </span>
            <div className="arrow-icon">
              <ArrowOutwardIcon className="arrow-icon" />
            </div>
          </div>
        );
      })}
      <div
        className="highlight"
        style={{ height, backgroundColor: "gray" }}
      ></div>
    </div>
  );
};

export default HoverList;
