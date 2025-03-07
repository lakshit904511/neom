import ReactSpeedometer from "react-d3-speedometer";
import over from "../../assets/img/overwhelmed.svg";
import anger from "../../assets/img/anger.svg";
import appre from "../../assets/img/appreciation.svg";
import bore from "../../assets/img/boredom.svg";
import joy from "../../assets/img/joy.svg";
import disapp from "../../assets/img/disappointed.svg";


export default function Speedometer() {
  return (
    <div style={{ position: 'relative', width: '400px'}}>
      <ReactSpeedometer
        minValue={0}
        maxValue={100}
        value={0}
        width={400}
        needleHeightRatio={0.8}
        needleBaseWidth={1.5}
        segments={5}
        segmentColors={["#55BF3B", "#9ACC0D", "#D8D90F", "#FFB03A", "#FF385C",]}
        needleColor="#222222"
        ringWidth={20}
        forceRender={true}
        currentValueText=""  // Remove value below the needle
      />
      
      {/* Position the images above the segments manually */}
      <div style={{ position: 'absolute', bottom: '148px', left: '-27px' }}>
        <img src={over} alt="Segment 1" style={{ width: '40px', height: '40px' }} />
      </div>
      <div style={{ position: 'absolute', top: '7px', left: '53px' }}>
        <img src={appre} alt="Segment 2" style={{ width: '40px', height: '40px' }} />
      </div>
      <div style={{ position: 'absolute', top: '20px', left: '220px' }}>
        <img src={bore} alt="Segment 3" style={{ width: '40px', height: '40px' }} />
      </div>
      <div style={{ position: 'absolute', top: '10px', left: '310px' }}>
        <img src={disapp} alt="Segment 4" style={{ width: '40px', height: '40px' }} />
      </div>
      <div style={{ position: 'absolute', bottom: '148px', right: '-27px' }}>
        <img src={anger} alt="Segment 5" style={{ width: '40px', height: '40px' }} />
      </div>
    </div>
  );
}
