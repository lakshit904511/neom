import { MdOutlineStar } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import over from "../Components/assets/img/overwhelmed.svg";
import { CiGrid41 } from "react-icons/ci";
import cloud from "../Components/assets/img/Temprature.svg";

export default function HomePageCard1({ list }) {
  return (
    <div className="w-[520px] h-[290px] mt-[60px] border border-[#222222] bg-[#F9F7F2] rounded-[12px] opacity-100 flex justify-center items-center">
      <div className="w-[211px] h-[288px] relative">
        <img
          className="w-[211px] h-[288px] rounded-l-[12px] object-cover"
          src={list.img}
          alt="golf"
        />
        <img
          className="absolute bottom-[6px] right-[6px] w-[60px] h-[40px]"
          src={cloud}
        />
      </div>
      <div className="w-[312px] h-[288px] rounded-r-[12px] pt-[15px]  flex flex-col items-start pl-[15px] bg-white">
        <h1
          className="w-[157px] h-[35px] text-left text-[18px] leading-[35px] tracking-[0.79px] text-[#222222] opacity-100
"
        >
          {list.title}
        </h1>

        <div className="flex items-center gap-[10px] w-[200px] text-[10px] leading-[18px] tracking-[0.31px] text-[#222222] opacity-100">
          <div className="flex items-center gap-0 text-[15px]">
            <MdOutlineStar className="text-[#FF385C]" />
            <MdOutlineStar className="text-[#FF385C]" />
            <MdOutlineStar className="text-[#FF385C]" />
            <MdOutlineStar className="text-[#FF385C]" />
            <MdOutlineStar className="text-[#FF385C]" />
          </div>
          5.0 (23 Reviews)
        </div>
        <p className="w-[290px] h-[53px] tracking-[.35px] text-left text-[#222222] text-[12px] leading-[15px] mt-[18px] opacity-100 font-[brownlight]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat…{" "}
          <span className="text-[#FF385C]">read more</span>
        </p>

        <ul className="w-[290px] h-[76px] mt-[18px] flex flex-col gap-1.5">
          <li className="flex items-center gap-2">
            {" "}
            <CiCalendar className=" w-[14px] h-[16px] text-[#FF385C]" />
            <span className=" w-[218px] text-left text-[11px] leading-[17px] tracking-[0.31px] text-[#222222] font-[brownlight]">
              Nov 10, 10:30 AM - Nov 29. 6:30 PM
            </span>
          </li>
          <li className="flex items-center gap-2">
            <CiLocationOn className="w-[14px] h-[16px] text-[#FF385C]" />
            <span className=" w-[218px] text-left text-[11px] leading-[17px] tracking-[0.31px] text-[#222222] font-[brownlight]">
              Sindalah City
            </span>
          </li>
          <li className="flex items-center gap-2">
            <CiGrid41 className="w-[14px] h-[16px] text-[#FF385C]" />
            <span className=" w-[218px] text-left text-[11px] leading-[17px] tracking-[0.31px] text-[#222222] font-[brownlight]">
              Golf
            </span>
          </li>
          <li className="flex items-center gap-2 pt-[16px]">
            <img src={over} className="w-[14px] h-[16px] text-[#55BF3B]" />
            <span className=" w-[230px] text-left text-[11px] leading-[17px] tracking-[0.31px] text-[#222222] font-[BrownMedium]">
              Overwhelmed vibes are coming here
            </span>
            <span className=" text-left text-[11.5px] leading-[17px] tracking-[0.31px] text-[#222222] font-[BrownMedium] pr-[10px]">
              Scheduled
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
