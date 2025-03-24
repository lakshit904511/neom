import React from "react";
import ReactSpeedometer from "react-d3-speedometer";


export default function FeedbackSpeedometer({rec}) {
 

  console.log(rec);

  return (
    <div style={{ position: "relative", width: "250px", height: "180px" }}>
      <ReactSpeedometer
        minValue={0}
        maxValue={100}
        value={`${rec}`}
        needleHeightRatio={0.7}
        needleBaseWidth={1.5}
        segments={5}
        segmentColors={["#55BF3B", "#9ACC0D", "#D8D90F", "#FFB03A", "#FF385C"]}
        needleColor="#222222"
        ringWidth={20}
        forceRender={true}
        currentValueText={`${rec}`}
        animate={true}
        animationDuration={2000}
      />
    </div>
  );
}
