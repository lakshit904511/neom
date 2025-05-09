import React, { useState, useEffect } from "react";
import over from "../../assets/img/overwhelmed.svg";
import anger from "../../assets/img/anger.svg";
import appre from "../../assets/img/appreciation.svg";
import bore from "../../assets/img/boredom.svg";
import disapp from "../../assets/img/disappointed.svg";
import joy from "../../assets/img/joy.svg";

const Images = [over,joy,appre,  bore,  disapp, anger];

Images.reverse();

function Speedometer({
  width = 500,
  height = 230,
  down = 0,
  rec
}) {
 

  const numericValue = Number(rec);
  const safeValue = Number.isFinite(numericValue) ? numericValue : 0;

  const outerRadiii = 180;
  const totalSegments = 30;
  const thickness = 30;
  const innerRadius = outerRadiii - thickness;
  const gapPx = 3;
  const gapAngleDeg = (gapPx / outerRadiii) * (180 / Math.PI);
  const segmentAngleDeg = (180 - totalSegments * gapAngleDeg) / totalSegments;

  const colors = ["#40bf4c", "#93cc39", "#a4e541", "#d6d93e", "#ffb14a", "#ff3e5b"];

  const svgWidth = width;
  const svgHeight = height;
  const cx = svgWidth / 2;
  const cy = outerRadiii - down;

  function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = (angleInDegrees * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY - radius * Math.sin(angleInRadians),
    };
  }

  function describeSegment(startAngle, endAngle) {
    const startOuter = polarToCartesian(cx, cy, outerRadiii, startAngle);
    const endOuter = polarToCartesian(cx, cy, outerRadiii, endAngle);
    const startInner = polarToCartesian(cx, cy, innerRadius, endAngle);
    const endInner = polarToCartesian(cx, cy, innerRadius, startAngle);
    const largeArcFlag = "0";

    return [
      `M ${startOuter.x} ${startOuter.y}`,
      `A ${outerRadiii} ${outerRadiii} 0 ${largeArcFlag} 0 ${endOuter.x} ${endOuter.y}`,
      `L ${startInner.x} ${startInner.y}`,
      `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 1 ${endInner.x} ${endInner.y}`,
      "Z",
    ].join(" ");
  }

  const segments = [];
  let currentAngle = 180;
  for (let i = 0; i < totalSegments; i++) {
    const startAngle = currentAngle;
    const endAngle = startAngle + segmentAngleDeg;
    const colorIndex = Math.floor(i / 5);
    const fillColor = colors[colorIndex] || colors[colors.length - 1];

    segments.push(
      <path
        key={i}
        d={describeSegment(startAngle, endAngle)}
        fill={fillColor}
        stroke="none"
      />
    );

    currentAngle = endAngle + gapAngleDeg;
  }

  const needleAngle = 180 - (safeValue / 30) * 180;
  const needleLength = outerRadiii - thickness / 2 - 20;
  const needleTip = polarToCartesian(cx, cy, needleLength, needleAngle);



  return (
    <svg width={svgWidth} height={svgHeight}>
      <g transform={`scale(1,-1) translate(0,-${svgHeight})`}>
        {segments}
        <line
          x1={cx}
          y1={cy}
          x2={needleTip.x}
          y2={needleTip.y}
          stroke="black"
          strokeWidth="6"
          style={{
            transition: "all 5s ease-in-out",
          }}
        />
        <circle cx={cx} cy={cy} r="8" fill="black" />
      </g>
    </svg>
  );
}

export default Speedometer;
