import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./AnimatedDivIndex.css";
import GrowingBorder from "../GrowingBorder/GrowingBorder";

const AnimatedDivIndex = ({ contentList }) => {
  const parentRef = useRef(null);

  const divRef = Array.from({ length: contentList.length }, () => useRef(null));
  const [current, setCurrent] = useState("01");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (enteries) => {
        enteries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = divRef.findIndex(
              (ref) => ref.current === entry.target
            );
            animateIndexChange(index + 1);
          }
        });
      },
      { root: parentRef.current, rootMargin: "0px", threshold: 0.8 }
    );
    divRef.forEach((div) => {
      if (div.current) obs.observe(div.current);
    });
    return () => {
      divRef.forEach((div) => {
        if (div.current) obs.unobserve(div.current);
      });
    };
  }, []);

  const animateIndexChange = (index) => {
    if (index.toString === current) return;
    gsap.to(".index-container", {
      y: -100,
      duration: 0.3,
      ease: "power4.in",
      onComplete: () => {
        setCurrent(index < 10 ? `0${index}` : index.toString());
        gsap.fromTo(
          ".index-container",
          { y: 100 },
          { y: 0, duration: 0.3, ease: "power2.out" }
        );
      },
    });
  };

  return (
    <div ref={parentRef} className="animated-div-wrap">
      <div className="animated-div-left">
        <div className="animated-div-hidder">
          <div className="index-container">
            <p>{current}</p>
          </div>
        </div>
      </div>
      <div className="animated-div-right">
        {contentList.map((d, index) => {
          return (
            <div key={index} ref={divRef[index]} className="conts">
              <GrowingBorder />
              <br />
              <h1>{d.title}</h1>
              <p>{d.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedDivIndex;
