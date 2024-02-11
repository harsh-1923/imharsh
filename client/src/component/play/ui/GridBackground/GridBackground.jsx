import React, { useEffect, useRef } from "react";
import "./GridBackground.css";

export const GridBackgroundCore = ({ children }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    const numColumns = 30;
    const numRows = 30;

    const throttleTimeout = setTimeout(() => {
      for (let i = 0; i < numRows; i++) {
        const line = document.createElement("div");
        line.className = "grid-line horizontal";
        line.style.top = `${(100 / numRows) * i}%`;
        grid.appendChild(line);
      }

      for (let i = 0; i < numColumns; i++) {
        const line = document.createElement("div");
        line.className = "grid-line vertical";
        line.style.left = `${(100 / numColumns) * i}%`;
        grid.appendChild(line);
      }

      console.log(Date.now());
    }, 100);

    return () => clearTimeout(throttleTimeout);
  }, []);

  return (
    <div className="grid-background" ref={gridRef}>
      <div className="content">{children}</div>
    </div>
  );
};

export const GridBackground = React.memo(GridBackgroundCore);
