import React, { useState, useEffect, useRef } from "react";

const ObserverDiv = () => {
  const [currentDiv, setCurrentDiv] = useState(1);
  const divRefs = [useRef(null), useRef(null), useRef(null)]; // Refs for each div

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when at least 50% of the div is in view
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find index of the intersecting div in divRefs array
          const index = divRefs.findIndex(
            (ref) => ref.current === entry.target
          );
          if (index !== -1) {
            setCurrentDiv(index + 1); // Index is zero-based, so add 1 to get the div number
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    // Observe each div
    divRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Cleanup observer
      observer.disconnect();
    };
  }, [divRefs]);

  return (
    <div>
      <div ref={divRefs[0]}>Div 1</div>
      <div ref={divRefs[1]}>Div 2</div>
      <div ref={divRefs[2]}>Div 3</div>
      <p>Current Div: {currentDiv}</p>
    </div>
  );
};

export default ObserverDiv;
