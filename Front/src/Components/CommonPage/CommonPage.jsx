import { MdOutlineStar } from "react-icons/md";
const stars = [1, 2, 3, 4, 5];

import CommonPageCard from "./CommonPageCard";
import Slider from "../Slider/Slider";
import DashBoardCard3 from "../DashboardCards/DashBoardCard3";
import { useLocation } from "react-router-dom";
import ImageGrid from "./ImageGrid";
import CommonAbout from "./CommonAbout";
import ReserveCard from "./ReserveCard";
import fullCardDetails from "../../assets/Dummy_Data/fullCardDetails";
import serverData from "../../assets/Dummy_Data/serverData";

export default function CommonPage({
  detailedData = null,
  detailedText = null,
}) {
  var mainCommonPageData = null;
  var check = null;
  const value = useLocation();

  if (detailedData === null && detailedText === null) {
    if (value.state.text !== null) {
      check = value.state.text;
    }
    if (value.state.text === null) {
      check = "";
    }
    mainCommonPageData = value.state.data;
  } else {
    if (detailedText !== null) {
      check = detailedText;
    }
    mainCommonPageData = detailedData;
  }

  const recommendationCards = serverData[0].recommendataEvents.flatMap(
    (eventId) =>
      fullCardDetails.filter((onecardData) => onecardData.id === eventId)
  );

  console.log(mainCommonPageData);

  return (
    <div className="mt-[20px]">
      <h1
        style={{ fontFamily: "IvyMode, sans-serif" }}
        className="text-left font-normal text-[24px]  tracking-[1.19px] text-[#222222] opacity-100"
      >
        {mainCommonPageData.name}
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
          {mainCommonPageData.starReview} .{" "}
          <span className="border-b">
            {mainCommonPageData.noOfReview} reviews
          </span>
        </span>
        <span
          style={{ fontFamily: "Brown, sans-serif" }}
          className=" text-left text-[10px] tracking-[0.31px] text-[#222222]"
        >
          . {mainCommonPageData.location}, Dubai
        </span>
      </div>

      <ImageGrid val={mainCommonPageData.imageMain} />

      <div className="px-[80px] flex justify-between mt-[25px] ">
        <CommonAbout datadetailedEvent={mainCommonPageData.detailedEvent[0]} />

        <ReserveCard check={check} />
      </div>

      <div className="flex px-[80px] flex-col w-[650px]">
        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="mt-[20px] text-left font-normal text-[20px]  tracking-[1.19px] text-[#222222] opacity-100"
        >
          {mainCommonPageData.detailedEvent[0].operatorTitle}
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
          {mainCommonPageData.detailedEvent[0].mainDescription}
        </p>
      </div>

      <CommonPageCard />

      <div className="mt-[45px]">
        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="text-left text-[25px] leading-[44px] tracking-[1.16px] text-[#222222]"
        >
          Some more recommandation for you, Shane!
        </h1>

        <div className="flex flex-col justify-center">
          <div className="mt-[20px] grid grid-cols-5 items-center gap-[15px]">
            {recommendationCards.map((card3) => (
              <DashBoardCard3 key={card3.id} card3={card3} up={1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
