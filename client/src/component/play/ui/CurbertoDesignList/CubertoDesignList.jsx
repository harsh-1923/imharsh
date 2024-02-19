import React, { useState, useRef } from "react";
import "./CubertoDesign.css";
import gsap from "gsap";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const CurbertoDesignListItem = ({ data }) => {
  const [text, setText] = React.useState(null);
  const backdropRef = useRef(null);
  const [isBackdropOpen, setIsBackdropOpen] = useState(false);

  const handleMouseLeave = (e) => {
    gsap.killTweensOf(backdropRef.current);
    gsap.to(backdropRef.current, { height: "0", top: "50%", duration: 0.1 });
    setIsBackdropOpen(false);
  };

  const handleMouseEnter = (e) => {
    gsap.to(backdropRef.current, {
      height: "100px",
      top: 0,
      duration: 0.3,
      ease: "power2.easeInOut",
    });
    setIsBackdropOpen(true);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="cuberto-design-list-item"
    >
      <div
        ref={backdropRef}
        className={`cuberto-design-list-backdrop ${
          isBackdropOpen ? "open" : ""
        }`}
      >
        <div className="cuberto-design-list-backdrop-cont-wrap">
          <h2 className="backdrop-text">{data.title}</h2>
          <ArrowOutwardIcon style={{ color: "black", marginRight: "20px" }} />
          <h2 className="backdrop-text">{data.title}</h2>
          <ArrowOutwardIcon style={{ color: "black", marginRight: "20px" }} />
          <h2 className="backdrop-text">{data.title}</h2>
          <ArrowOutwardIcon style={{ color: "black", marginRight: "20px" }} />
          <h2 className="backdrop-text">{data.title}</h2>
          <ArrowOutwardIcon style={{ color: "black", marginRight: "20px" }} />
          <h2 className="backdrop-text">{data.title}</h2>
          <ArrowOutwardIcon style={{ color: "black", marginRight: "20px" }} />
          <h2 className="backdrop-text">{data.title}</h2>
          <ArrowOutwardIcon style={{ color: "black", marginRight: "20px" }} />
          <h2 className="backdrop-text">{data.title}</h2>
          <ArrowOutwardIcon style={{ color: "black", marginRight: "20px" }} />
          <h2 className="backdrop-text">{data.title}</h2>
          <ArrowOutwardIcon style={{ color: "black", marginRight: "20px" }} />
          <h2 className="backdrop-text">{data.title}</h2>
          <ArrowOutwardIcon style={{ color: "black", marginRight: "20px" }} />
          <h2 className="backdrop-text">{data.title}</h2>
          <ArrowOutwardIcon style={{ color: "black", marginRight: "20px" }} />
          <h2 className="backdrop-text">{data.title}</h2>
          <ArrowOutwardIcon style={{ color: "black", marginRight: "20px" }} />
          <h2 className="backdrop-text">{data.title}</h2>
          <ArrowOutwardIcon style={{ color: "black", marginRight: "20px" }} />
          <h2 className="backdrop-text">{data.title}</h2>
          <ArrowOutwardIcon style={{ color: "black", marginRight: "20px" }} />
          <h2 className="backdrop-text">{data.title}</h2>
          <ArrowOutwardIcon style={{ color: "black", marginRight: "20px" }} />
        </div>
      </div>
      <h2>{data.title}</h2>
      <ArrowOutwardIcon />
    </div>
  );
};

const CubertoDesignList = ({ content }) => {
  return (
    <div className="cuberto-design-wrap">
      {content.map((cont, index) => (
        <div key={index}>
          <CurbertoDesignListItem data={cont} />
        </div>
      ))}
    </div>
  );
};

export default CubertoDesignList;
