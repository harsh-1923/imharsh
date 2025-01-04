import React, { CSSProperties } from "react";
import "./Globe.css";

const Globe = () => {
  // How many horizontal lines you want
  const lineCount = 5;

  // Define the start and end vertical fractions
  const start = 0.1; // 20%
  const end = 0.9; // 80%

  // Generate an array of lines with `lineCount` entries
  const lines = Array.from({ length: lineCount }, (_, i) => {
    const topFraction = start + (i * (end - start)) / (lineCount - 1);
    const delta = Math.abs(0.5 - topFraction);
    const chordFraction = 2 * Math.sqrt(0.25 - delta * delta);

    return {
      top: `${(topFraction * 100).toFixed(2)}%`,
      width: `${(chordFraction * 100).toFixed(2)}%`,
    };
  });

  return (
    <div
      style={{ transformStyle: "preserve-3d" }}
      className="relative w-1/2 max-w-[500px] min-w-[350px] aspect-square"
    >
      {lines.map((line, idx) => (
        <div
          key={idx}
          className="absolute h-[1px] dark:bg-neutral-800 bg-neutral-300"
          style={{
            top: line.top,
            left: "50%",
            width: line.width,
            transform: "translateX(-50%)",
          }}
        />
      ))}

      {/* Rotating circles */}
      {Array(20)
        .fill(0)
        .map((_, idx) => (
          <div
            key={idx}
            className="aspect-square absolute inset-0 border-2 dark:border-neutral-800 border-neutral-300 rounded-full cameo"
            style={
              {
                "--index": `${idx / 2}s`,
                "--duration": "12s",
              } as CSSProperties
            }
          />
        ))}
    </div>
  );
};

export default Globe;
