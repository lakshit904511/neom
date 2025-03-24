import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactSpeedometer from "react-d3-speedometer";
import over from "../../assets/img/overwhelmed.svg";
import anger from "../../assets/img/anger.svg";
import appre from "../../assets/img/appreciation.svg";
import bore from "../../assets/img/boredom.svg";
import disapp from "../../assets/img/disappointed.svg";

const reactions = [
  {
    range: [0, 20],
    position: { bottom: "148px", left: "-20px" },
    src: over,
    alt: "Segment 1",
  },
  {
    range: [21, 40],
    position: { top: "7px", left: "53px" },
    src: appre,
    alt: "Segment 2",
  },
  {
    range: [41, 60],
    position: { top: "-30px", left: "181px" },
    src: bore,
    alt: "Segment 3",
  },
  {
    range: [61, 80],
    position: { top: "10px", left: "310px" },
    src: disapp,
    alt: "Segment 4",
  },
  {
    range: [81, 100],
    position: { bottom: "148px", right: "-20px" },
    src: anger,
    alt: "Segment 5",
  },
];

export default function Speedometer() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomValue = Math.floor(Math.random() * 101);
      setValue(randomValue);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const isActive = (min, max) => value >= min && value <= max;

  return (
    <div style={{ position: "relative", width: "400px" }}>
      <ReactSpeedometer
        minValue={0}
        maxValue={100}
        value={value}
        width={400}
        needleHeightRatio={0.8}
        needleBaseWidth={1.5}
        segments={5}
        segmentColors={["#55BF3B", "#9ACC0D", "#D8D90F", "#FFB03A", "#FF385C"]}
        needleColor="#222222"
        ringWidth={20}
        forceRender={true}
        currentValueText=""
        animate={true}
        animationDuration={2000}
      />

      {reactions.map((reaction, index) => (
        <motion.div
          key={index}
          style={{ position: "absolute", ...reaction.position }}
          animate={
            isActive(reaction.range[0], reaction.range[1])
              ? { scale: [1, 1.2] }
              : { scale: 1 }
          }
          transition={{
            duration: 0.5,
            repeat: isActive(reaction.range[0], reaction.range[1])
              ? Infinity
              : 0,
            repeatType: "reverse",
          }}
        >
          <img
            src={reaction.src}
            alt={reaction.alt}
            style={{ width: "40px", height: "40px" }}
          />
        </motion.div>
      ))}
    </div>
  );
}
