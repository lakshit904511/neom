import { MdOutlineStar } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import over from "../../assets/img/overwhelmed.svg";
import { CiGrid41 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function DashBoardCard1({ list }) {
  const navigate = useNavigate();
  console.log(list);

  const stars = list.starReview;
  console.log(stars);

  return (
    <div className="w-[37.5rem] h-[14.5rem] mt-[1.875rem] border border-[#222222] rounded-[0.75rem] opacity-100 flex justify-center items-center">
      <div className="w-[13.1875rem] h-[14.375rem] relative ">
        <img
          onClick={() => navigate("/details",{state:{text:null,val:list}})}
          className="w-[13.1875rem] h-full rounded-l-[0.75rem] object-cover cursor-pointer"
          src={list.imageMain}
          alt="golf"
        />
        <img
          className="absolute bottom-[0.375rem] right-[0.375rem] h-[2.1875rem]"
          src={list.imageCloud}
        />
      </div>
      <div className="w-[19.5rem] h-full rounded-r-[0.75rem] pt-[0.625rem] flex flex-col items-start pl-[0.7875rem] ">
        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="w-[10.1125rem] text-left text-[1.125rem] leading-[1.9875rem] tracking-[0.049375rem] text-[#222222] opacity-100"
        >
          {list.name}
        </h1>

        <div className="flex items-center gap-[0.625rem] w-[12.5rem] text-[0.75rem] tracking-[0.019375rem] text-[#222222] opacity-100">
          <div className="flex items-center gap-0 text-[0.8375rem]">
            {(Array.isArray(stars) ? stars : Array.from({ length: Number(stars) || 0 })).map((_, index) => (
              <MdOutlineStar
                key={index}
                className="text-[#FF385C] w-[13px] h-[13px]"
              />
            ))}

          </div>
          <span
            style={{ fontFamily: "BrownLight, sans-serif" }}
            className="pt-[0.0585rem] text-[.610rem]"
          >
            {list.starReview} {list.noOfReview} Reviews
          </span>
        </div>
        <p
          style={{ fontFamily: "BrownLight, sans-serif" }}
          className="w-[18.125rem] h-[3.3125rem] tracking-[.011875rem] text-left text-[#222222] text-[0.75rem] leading-[0.7675rem] mt-[0.450rem] opacity-100"
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat…{" "}
          <span className="text-[#FF385C]">read more</span>
        </p>

        <ul className="w-[18.125rem] h-[3.5rem] mt-[0.170rem] flex flex-col gap-[0.29375rem]">
          <li className="flex items-center gap-[0.325rem]">
            <CiCalendar className=" w-[0.875rem] h-[1rem] text-[#FF385C]" />
            <span
              style={{ fontFamily: "BrownLight, sans-serif" }}
              className=" w-[13.625rem] text-left text-[0.5875rem] leading-[1.0625rem] tracking-[0.029375rem] text-[#222222] "
            >
              Nov 10, 10:30 AM - Nov 29. 6:30 PM
            </span>
          </li>
          <li className="flex items-center gap-[0.325rem]">
            <CiLocationOn className="w-[0.875rem] h-[1rem] text-[#FF385C]" />
            <span
              style={{ fontFamily: "BrownLight, sans-serif" }}
              className=" w-[13.625rem] text-left text-[0.5875rem] leading-[1.0625rem] tracking-[0.029375rem] text-[#222222] "
            >
              {list.location}
            </span>
          </li>
          <li className="flex items-center gap-[0.325rem]">
            <CiGrid41 className="w-[0.875rem] h-[1rem] text-[#FF385C]" />
            <span
              style={{ fontFamily: "BrownLight, sans-serif" }}
              className=" w-[13.625rem] text-left text-[0.5875rem] leading-[1.0625rem] tracking-[0.029375rem] text-[#222222]"
            >
              {list.nameImage}
            </span>
          </li>
          <li className="flex items-center gap-[0.125rem] pt-[0.5rem]">
            <img src={over} className="w-[0.645rem] text-[#55BF3B]" />
            <span
              style={{ fontFamily: "BrownLight, sans-serif" }}
              className="pt-[0.125rem] w-[14.375rem] text-left text-[0.5875rem] leading-[1.0625rem] tracking-[0.059375rem] text-[#222222] "
            >
              {list.reviewTitle}
            </span>
            <span
              style={{ fontFamily: "Brown, sans-serif" }}
              className=" text-left text-[0.61875rem] leading-[1.0625rem] tracking-[0.019375rem] text-[#222222]  pr-[0.625rem]"
            >
              {list.reviewSchedule}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
