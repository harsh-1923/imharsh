import React, { useState, useEffect } from "react";
import "./Typewriter.css";

function Typewriter({ text, delay = 100 }) {
  const [displayText, setDisplayText] = useState("");
  const [isLoading, setIsLoading] = useState(true); // For skeleton

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setDisplayText(text.substring(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex >= text.length) {
        clearInterval(intervalId);
        setIsLoading(false); // Animation complete, hide skeleton
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [text, delay]);

  return (
    <div style={{ display: "inline-block" }}>
      {" "}
      {/* For inline skeleton */}
      {isLoading && (
        <span style={{ backgroundColor: "#eee", width: text.length + "ch" }}>
          &nbsp; {/* Non-breaking space for width */}
        </span>
      )}
      <span>{displayText}</span>
    </div>
  );
}

export default Typewriter;
