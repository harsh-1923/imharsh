import React, { useState } from "react";
import "./HoverList.css";
import gsap from "gsap";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const HoverList = ({ data, height, primaryColor, secondaryColor }) => {
  const [pos, setPos] = useState(-80);
  data = [
    { title: "Serene Sunshine", location: "Germany" },
    { title: "Tranquil Meadows", location: "France" },
    { title: "Peaceful Forest", location: "Canada" },
    { title: "Calm Waters", location: "Australia" },
    { title: "Quiet Mountains", location: "Switzerland" },
    { title: "Relaxing Beach", location: "Maldives" },
  ];
  height = 80;
  // (primaryColor = "white"), (secondaryColor = "black");
  if (!primaryColor) primaryColor = "white";
  if (!secondaryColor) secondaryColor = "black";

  const handleMouseEnter = (idx, ts) => {
    gsap.to(".highlight", {
      top: ts,
      duration: 0.2,
      ease: "power2.easeInOut",
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(".highlight", {
      top: -80,
      duration: 0.4,
      ease: "power2.out",
    });
  };
  const handleMouseMove = (e) => {};

  return (
    <div
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
      className="hover-list-wrap"
    >
      {data.map((item, idx) => {
        return (
          <div
            onMouseEnter={() => handleMouseEnter(idx, idx * height)}
            className="list-item-wrap"
            style={{ height, color: primaryColor }}
          >
            <div>
              <h1>{item.title}</h1>
            </div>
            <div className="mid">
              <h1>{item.location}</h1>
            </div>
            <div className="arrow-icon">
              <ArrowOutwardIcon className="arrow-icon" />
            </div>
          </div>
        );
      })}
      <div
        className="highlight"
        style={{ height, backgroundColor: secondaryColor }}
      ></div>
    </div>
  );
};

export default HoverList;
