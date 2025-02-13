import { MdOutlineStar } from "react-icons/md";
const stars = [1, 2, 3, 4, 5];

import CommonPageCard from "./CommonPageCard";
import Slider from "../Slider/Slider";
import DashBoardCard3 from "../DashboardCards/DashBoardCard3";
import { dataDashBoardCard3 } from "../../assets/Dummy_Data/data";
import { useLocation } from "react-router-dom";
import ImageGrid from "./ImageGrid";
import CommonAbout from "./CommonAbout";
import ReserveCard from "./ReserveCard";

export default function CommonPage() {
  const value = useLocation();
  var check;
  if(value.state===null){
    check="";
  }else{
    check = value.state.text
  }
  

  const total = 2;
  return (
    <div className="mt-[20px]">
      <h1
        style={{ fontFamily: "IvyMode, sans-serif" }}
        className="text-left font-normal text-[24px]  tracking-[1.19px] text-[#222222] opacity-100"
      >
        Round of Golf
      </h1>

      <div className="flex mt-[8px] items-center gap-[10px]">
        <div className="flex items-center justify-center">
          {stars.map((star, index) => (
            <MdOutlineStar
              key={index}
              className="text-[#FF385C] w-[13px] h-[13px]"
            />
          ))}
        </div>
        <span
          style={{ fontFamily: "Brown, sans-serif" }}
          className=" text-left text-[10px] tracking-[0.31px] text-[#222222]"
        >
          5.0 . <span className="border-b">23 reviews</span>
        </span>
        <span
          style={{ fontFamily: "Brown, sans-serif" }}
          className=" text-left text-[10px] tracking-[0.31px] text-[#222222]"
        >
          . Sindalah City, Dubai
        </span>
      </div>

       <ImageGrid />

      <div className="px-[80px] flex justify-between mt-[25px] ">
        <CommonAbout />

        <ReserveCard check={check} />
      </div>

      <div className="flex px-[80px] flex-col w-[650px]">
        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="mt-[20px] text-left font-normal text-[20px]  tracking-[1.19px] text-[#222222] opacity-100"
        >
          Operator River Stone
        </h1>
        <div className="flex items-start mt-[10px]  justify-start">
          {stars.map((star, index) => (
            <MdOutlineStar
              key={index}
              className="text-[#FF385C] w-[13px] h-[13px]"
            />
          ))}
          <span
            style={{ fontFamily: "Brown, sans-serif" }}
            className=" text-left text-[10px] ml-[10px] tracking-[0.31px] text-[#222222]"
          >
            4.9
          </span>
        </div>
        <p
          style={{ fontFamily: "BrownLight, sans-serif" }}
          className="w-[650px] text-left mt-[20px] leading-5 opacity-90  tracking-wide  text-[12px] text-[#222222]  "
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elit.
        </p>
      </div>

      <CommonPageCard />

      <Slider value={1} />

      <div className="mt-[35px]">
        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="text-left text-[25px] leading-[44px] tracking-[1.16px] text-[#222222]"
        >
          Some more recommandation for you, Shane!
        </h1>

        <div className="flex flex-col justify-center">
          {Array.from({ length: total }).map((_, i) => (
            <div key={i} className="mt-[20px] flex items-center gap-[15px]">
              {dataDashBoardCard3.map((card3) => (
                <DashBoardCard3 key={card3.id} card3={card3} up={1} />
              ))}
            </div>
          ))}
        </div>

      </div>


    </div>
  );
}
