import React from "react";
import "./Airbus.css";

const Airbus = () => {
  return (
    <div className="c-airbus">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/JS6w-DXiZpk?si=p8NZU47znau4_Jtv&amp;controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Airbus;
