import React, { useRef, useEffect } from "react";
import "./ScrollFlipInfiniteText.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollFlipInfiniteText = ({ content }) => {
  let xPercent = 0;
  let direction = useRef(-1);

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    if (firstText.current) gsap.set(firstText.current, { xPercent: xPercent });
    if (secondText.current)
      gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction.current;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => {
          direction.current = e.direction * -1;
        },
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="slider-main">
      <div className="sliderContainer">
        <div ref={slider} className="slider">
          <p ref={firstText}>{content} - </p>
          <p ref={secondText}>{content} - </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollFlipInfiniteText;
