import React, { CSSProperties } from "react";
import "./exp-styles.css";

const ExperimentPage = () => {
  // const getRandomVibrantColor = () => {
  //   const vibrantColors = [
  //     "#FF5733", // Vibrant Orange
  //     "#33FF57", // Vibrant Green
  //     "#5733FF", // Vibrant Blue
  //     "#FF33A8", // Vibrant Pink
  //     "#33FFF3", // Vibrant Aqua
  //     "#F3FF33", // Vibrant Yellow
  //   ];
  //   return vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  // };
  return (
    <div
      className="w-screen h-screen debug flex items-center justify-center p-4 relative"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="w-[400px] aspect-square absolute left-1/2 top-1/2 -translate-x-full -translate-y-1/2"
        style={{ transformStyle: "preserve-3d" }}
      >
        {Array(20)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className="w-[400px] aspect-square absolute inset-0 border-2 border-neutral-800  rounded-full  cameo"
              style={
                {
                  "--index": `${idx / 2}s`,
                  "--duration": "10s",
                } as CSSProperties
              }
            ></div>
          ))}
      </div>
    </div>
  );
};

export default ExperimentPage;
