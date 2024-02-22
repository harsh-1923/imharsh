import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import "./ThatUI.css";

const Holder = ({ header, tag, last = false, i, clickHandler }) => {
  return (
    <div onClick={() => clickHandler(i)} className="holder">
      <div className="holder-children">
        <h1 className="holder-header">{header}</h1>
        <p className="holder-tag">{tag}</p>
      </div>
      <div className="holder-link-icon">
        {/* <small>See Component</small> */}
        <ArrowOutwardIcon />
      </div>
      {!last && <div className="holder-bottom-border"></div>}
    </div>
  );
};

const ThatUI = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Call your animate method when the component enters the viewport
          animate();
          // Stop observing once animation is triggered
          observer.unobserve(entry.target);
        }
      });
    });

    // Start observing the element
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Clean up function
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const createDelay = (sec) => {
    return new Promise((resolve) => {
      setTimeout(resolve, sec * 1000); // Convert seconds to milliseconds
    });
  };

  const animate = () => {
    const tl = gsap.timeline();
    tl.to(".that-ui-wrap", { delay: 3 })
      .to(".that-ui-keynote-ctr", {
        top: 0,
        duration: 1,
        ease: "back.inOut(1.7)",
      })
      .to(".that-ui-canvas", {
        backgroundColor: "#1e1e1e34",
        duration: 2,
        ease: "power1.out",
      })
      .to(".that-ui-keynote-ctr", {
        top: "-40px",
        duration: 1,
        ease: "back.inOut(1.7)",
      })
      .to(".horizontal-canvas-border", {
        opacity: 1,
        width: "100%",
        duration: 1,
        ease: "power2.out",
        stagger: 0.8,
      })
      .to(".vertical-canvas-border", {
        opacity: 1,
        height: "75vh",
        duration: 1,
        ease: "power2.out",
        stagger: 0.6,
      })
      .to(".that-ui-keynote-ctr", {
        top: "-80px",
        duration: 1,
        ease: "back.inOut(1.7)",
      })
      .to(".holder-bottom-border", {
        opacity: 1,
        width: "100%",
        duration: 1,
        ease: "power2.out",
        stagger: 1,
      })
      .to(".that-ui-keynote-ctr", {
        top: "-120px",
        duration: 1,
        ease: "back.inOut(1.7)",
      })
      .to(".holder-children", {
        opacity: 1,
        duration: 3,
        ease: "Power1.in",
      })
      .to(".that-ui-keynote-ctr", {
        top: "-160px",
        duration: 1,
        ease: "back.inOut(1.7)",
      })
      .to(".that-ui-keynote-ctr", {
        top: "-200px",
        duration: 1,
        ease: "back.inOut(1.7)",
      })
      .to(".that-ui-img-placeholder-wrap", {
        top: "40px",
        left: "-100px",
        duration: 2,
        ease: "elastic.out(1,0.3)",
      })
      .to(".that-ui-keynote-ctr", {
        top: "-240px",
        duration: 1,
        ease: "back.inOut(1.7)",
      })
      .to(".holder-header", {
        color: "#90E584",
      })
      .to(".holder-header", {
        color: "#ac93f5",
        delay: "2",
      })
      .to(".that-ui-keynote-ctr", {
        top: "-280px",
        duration: 1,
        ease: "back.inOut(1.7)",
      })
      .to(".that-ui-img-placeholder-wrap", {
        top: "0px",
        left: "0px",
        duration: 0.5,
        ease: "power1.out",
      })
      .to(".that-ui-keynote-ctr", {
        top: "-280px",
        duration: 1,
        ease: "back.inOut(1.7)",
      })
      .to(".that-ui-keynote-ctr", {
        top: "-320px",
        duration: 1,
        ease: "back.inOut(1.7)",
      })
      .to(".holder-link-icon", {
        opacity: 1,
        duration: 0.5,
        ease: "power1.in",
      })
      .to(".that-ui-keynote-ctr", {
        top: "-360px",
        duration: 1,
        ease: "back.inOut(1.7)",
      })
      .to(".that-ui-keynote-ctr", {
        top: "-400px",
        duration: 1,
        delay: 2,
        ease: "back.inOut(1.7)",
      })
      .to(".that-ui-keynote-ctr", {
        top: "-440px",
        duration: 1,
        delay: 2,
        ease: "back.inOut(1.7)",
      })
      .to(".that-ui-keynote-ctr", {
        top: "-480px",
        duration: 1,
        delay: 2,
        ease: "back.inOut(1.7)",
      })
      .to(".that-ui-img-caurasel-ctr", {
        top: "200%",
        left: "-300vw",
        duration: 1,
        ease: "power1.out",
      })
      .to(".that-ui-img-placeholder-wrap", {
        top: "-100px",
        left: "120%",
        duration: 1,
        ease: "power1.in",
      })
      .to(".that-ui-img-caurasel-ctr", {
        top: "0px",
        left: "0px",
        duration: 2,
        ease: "power1.out",
      })
      .to([".vertical-canvas-border", ".horizontal-canvas-border"], {
        opacity: 0,
        duration: 2,
        ease: "power1.out",
      })
      .to(".that-ui-canvas", {
        backgroundColor: "#1e1e1e54",
        duration: 2,
        ease: "power1.out",
      });
  };

  const handleCau = (i) => {
    gsap.to(".that-ui-img-caurasel-ctr", {
      left: `${i * -100}%`,
      duration: 1,
      ease: "power1.in",
    });
  };
  return (
    <div ref={elementRef} className="that-ui-wrap">
      <div className="that-ui-top-sec">
        <h1 className="section-header">Building UI is Art.</h1>
        <div className="that-ui-keynote-wrapper">
          <div style={{ top: "40px" }} className="that-ui-keynote-ctr">
            <p className="main-subheader">Choose your canvas.</p>
            <p className="main-subheader">Create a rough sketch.</p>
            <p className="main-subheader">Build on your sketch</p>
            <p className="main-subheader">Add some details.</p>
            <p className="main-subheader">Looks okayish...</p>
            <p className="main-subheader">Add some visual elements.</p>
            <p className="main-subheader">Play with colors.</p>
            <p className="main-subheader">Fix your subjects.</p>
            <p className="main-subheader">Add some intertactive elements.</p>
            <p className="main-subheader">
              Maybe we can make the images more intresting...
            </p>
            <p className="main-subheader">a caurasel?</p>
            <p className="main-subheader">
              that changes images based on clicks?
            </p>
            <p className="main-subheader">Worth giving it a shot!!</p>
            <p className="main-subheader">
              Add some varnish to make your work standout ft JavaScript
            </p>
          </div>
        </div>
      </div>
      <div className="canvas-top-border horizontal-canvas-border"></div>
      <div className="canvas-bottom-border horizontal-canvas-border"></div>
      <div className="canvas-left-border vertical-canvas-border"></div>
      <div className="canvas-middle-border-desktop vertical-canvas-border"></div>
      <div className="canvas-middle-border-mobile horizontal-canvas-border"></div>
      <div className="canvas-right-border vertical-canvas-border"></div>

      <div className="that-ui-bottom-sec">
        <div className="that-ui-canvas">
          <div className="that-ui-canvas-left">
            <Holder
              clickHandler={handleCau}
              i={0}
              header={"Animated Index"}
              tag="See the releavant section of your current component based on scroll."
            />
            <Holder
              i={1}
              clickHandler={handleCau}
              header={"Cuberto Design List"}
              tag="A simple yet fun list by Cuberto Design"
            />
            <Holder
              i={2}
              clickHandler={handleCau}
              header={"Cuberto Design List"}
              tag="A simple yet fun list by Cuberto Design"
            />
            <Holder
              i={3}
              clickHandler={handleCau}
              header={"Cuberto Design List"}
              tag="A simple yet fun list by Cuberto Design"
              last={true}
            />
          </div>
          <div className="that-ui-canvas-right">
            <div className="that-ui-img-placeholder-wrap">
              <div className="that-ui-img-placeholder-sec1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="0.5"
                  stroke="white"
                  className="img-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="0.5"
                  stroke="white"
                  className="img-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </div>
              <div className="that-ui-img-placeholder-sec2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="0.5"
                  stroke="white"
                  className="img-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="0.5"
                  stroke="white"
                  className="img-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </div>
            </div>
            <div className="that-ui-img-caurasel-ctr">
              <div className="img-h red"></div>
              <div className="img-h blue"></div>
              <div className="img-h green"></div>
              <div className="img-h yellow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThatUI;
