import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import "./Test.css";

const SVGTrick = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  return (
    <div ref={ref} className="effect border">
      <Effect pathLengths={[pathLengthFirst, pathLengthSecond]} />
    </div>
  );
};
const Effect = ({ pathLengths }) => {
  return (
    <div className="test-svg">
      <svg width="100%" height="100%">
        <motion.path
          d="M 10 250 Q 500 200 1000 250"
          stroke="red"
          fill="none"
          strokeWidth="2"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[0],
          }}
        />
        <motion.path
          d="M 10 250 Q 500 200 1000 250"
          stroke="blue"
          strokeWidth="2"
          fill="none"
          initial={{
            pathOffset: 0,
            pathLength: 0,
          }}
          style={{
            offsetPath: pathLengths[0] - 0.2,
            pathLength: pathLengths[0],
          }}
        />
        <motion.path
          d="M 10 260 Q 500 210 1000 260"
          stroke="blue"
          strokeWidth="2"
          fill="none"
          initial={{
            pathOffset: 0,
            pathLength: 0,
          }}
          style={{
            pathOffset: pathLengths[0] - 0.2,
            pathLength: pathLengths[1],
          }}
        />
        <path
          d="M 10 250 Q 500 200 1000 250"
          stroke="red"
          strokeWidth="2"
          filter="url(#blurMe)"
        />
        <path
          d="M 10 260 Q 500 210 1000 260"
          stroke="blue"
          strokeWidth="2"
          filter="url(#blurMe)"
          //   pathLength={2}
        />
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default SVGTrick;
