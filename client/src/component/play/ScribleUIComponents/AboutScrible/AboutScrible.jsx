import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import "./AboutScrible.css";
import SnippetOne1 from "../../../../assets/images/AboutScrible/SnippetOne1.png";
import SnippetOne2 from "../../../../assets/images/AboutScrible/SnippetOne2.png";
import ScrollTrigger from "gsap/ScrollTrigger";

const Snippet = () => {
  const runnerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: runnerRef.current,
        duration: 2.3,
        start: "top 50%",
        end: "top -10%",
        scrub: 1,
      },
    });

    tl.fromTo(
      runnerRef.current,
      { height: 0 },
      { height: "97%", ease: "linear" }
    );
  }, []);

  return (
    <div className="snippet-wrap">
      <div ref={runnerRef} className="runner" />
      <div className="runner-muted" />
      <h2 className="snippet-header">Get an inspiration</h2>
      <p className="text-normal  secondary-text">
        Probably the most fun part! Bring out your mouse, surff the web, hover
        over elements, re-size the browser, inspect elements and get inspired.
      </p>
      <img className="snippet-img" src={SnippetOne2} />
    </div>
  );
};

const SnippetAlt = () => {
  const runnerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: runnerRef.current,
        duration: 2.3,
        start: "top 50%",
        end: "top -10%",
        scrub: 1,
      },
    });

    tl.fromTo(
      runnerRef.current,
      { height: 0 },
      { height: "97%", ease: "linear" }
    );
  }, []);

  return (
    <div className="snippet-wrap">
      <div ref={runnerRef} className="runner" />
      <div className="runner-muted" />
      <h2 className="snippet-header">Breakdown the element</h2>
      <p className="text-normal  secondary-text">
        How can I make that? A section here, a div inside, flexbox?
        <br />
        How do I make it responsive?
      </p>
      <img className="snippet-img" src={SnippetOne1} />
    </div>
  );
};

const AboutScrible = () => {
  return (
    <div className="about-scrible-wrap ">
      <div className="about-scrible-left-wrap ">
        <h2 className="about-scrible-header">
          About <br />
          ScribleUI
        </h2>
        <p className="text-normal">Ugh, Another UI Library?</p>
        <p className="text-normal secondary-text">
          No, ScribleUI is not another UI Library with components to use in your
          projects. ScribleUI is an attempt to decode the finest digital
          experience on the web, learn the process of creating them to develop
          the knack of creating original delightful experience.
        </p>
      </div>
      <div className="about-scrible-right-wrap ">
        <Snippet />
        <SnippetAlt />
        <SnippetAlt />
      </div>
    </div>
  );
};

export default AboutScrible;
