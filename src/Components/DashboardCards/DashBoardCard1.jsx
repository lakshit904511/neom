import { MdOutlineStar } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import over from '../../assets/img/overwhelmed.svg'
import { CiGrid41 } from "react-icons/ci";
import cloud from "../../assets/img/Temprature.svg";
import { useNavigate } from "react-router-dom";

export default function DashBoardCard1({ list }) {
  const navigate=useNavigate();

  return (
    <div className="w-[600px] h-[240px] mt-[30px] border border-[#222222]  rounded-[12px] opacity-100 flex justify-center items-center">
      <div className="w-[211px] h-[238px] relative">
        <img
          onClick={()=>(navigate("/details"))}
          className="w-[211px] h-full rounded-l-[12px] object-cover cursor-pointer"
          src={list.img}
          alt="golf"
        />
        <img
          className="absolute bottom-[6px] right-[6px] w-[60px] h-[40px]"
          src={cloud}
        />
      </div>
      <div className="w-[312px] h-full rounded-r-[12px] pt-[10px]  flex flex-col items-start pl-[15px] ">
        <h1 style={{fontFamily:"IvyMode, sans-serif"}}
          className="w-[157px] h-[35px] text-left text-[18px] leading-[35px] tracking-[0.79px] text-[#222222] opacity-100
"
        >
          {list.title}
        </h1>

        <div  className="flex items-center gap-[10px] w-[200px] text-[12px] leading-[18px] tracking-[0.31px] text-[#222222] opacity-100">
          <div className="flex items-center gap-0 text-[15px]">
            <MdOutlineStar className="text-[#FF385C]" />
            <MdOutlineStar className="text-[#FF385C]" />
            <MdOutlineStar className="text-[#FF385C]" />
            <MdOutlineStar className="text-[#FF385C]" />
            <MdOutlineStar className="text-[#FF385C]" />
          </div>
          <span style={{fontFamily:"BrownLight, sans-serif"} } className="pt-0.5">5.0 (23 Reviews)</span>
        </div>
        <p style={{fontFamily:"BrownLight, sans-serif"}} className="w-[290px] h-[53px] tracking-[.35px] text-left text-[#222222] text-[12px] leading-[15px] mt-[8px] opacity-100">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat…{" "}
          <span className="text-[#FF385C]">read more</span>
        </p>

        <ul className="w-[290px] h-[56px] mt-[8px] flex flex-col gap-1.5">
          <li className="flex items-center gap-2">
            <CiCalendar className=" w-[14px] h-[16px] text-[#FF385C]" />
            <span style={{fontFamily:"BrownLight, sans-serif"}} className=" w-[218px] text-left text-[11px] leading-[17px] tracking-[0.31px] text-[#222222] ">
              Nov 10, 10:30 AM - Nov 29. 6:30 PM
            </span>
          </li>
          <li className="flex items-center gap-2">
            <CiLocationOn className="w-[14px] h-[16px] text-[#FF385C]" />
            <span style={{fontFamily:"BrownLight, sans-serif"}} className=" w-[218px] text-left text-[11px] leading-[17px] tracking-[0.31px] text-[#222222] ">
              Sindalah City
            </span>
          </li>
          <li className="flex items-center gap-2">
            <CiGrid41 className="w-[14px] h-[16px] text-[#FF385C]" />
            <span style={{fontFamily:"BrownLight, sans-serif"}} className=" w-[218px] text-left text-[11px] leading-[17px] tracking-[0.31px] text-[#222222]">
              Golf
            </span>
          </li>
          <li className="flex items-center gap-2 pt-[8px]">
            <img src={over} className="w-[14px] h-[16px] text-[#55BF3B]" />
            <span style={{fontFamily:"BrownLight, sans-serif"}} className="pt-[2px] w-[230px] text-left text-[11px] leading-[17px] tracking-[0.31px] text-[#222222] ">
              Overwhelmed vibes are coming here
            </span>
            <span style={{fontFamily:"Brown, sans-serif"}} className=" text-left text-[11.5px] leading-[17px] tracking-[0.31px] text-[#222222]  pr-[10px]">
              Scheduled
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
