import { MdOutlineStar } from "react-icons/md";
import CommonPageCard from "./CommonPageCard";
import DashBoardCard3 from "../DashboardCards/DashBoardCard3";
import { useLocation } from "react-router-dom";
import ImageGrid from "./ImageGrid";
import CommonAbout from "./CommonAbout";
import ReserveCard from "./ReserveCard";
import fullCardDetails from "../../assets/Dummy_Data/fullCardDetails";
import serverData from "../../assets/Dummy_Data/serverData";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";

export default function CommonPage({
  detailedData = null,
  detailedText = null,
}) {
  var mainCommonPageData = null;
  var check = null;
  const value = useLocation();

  const userDetails=useSelector((store)=>store.user);
  console.log(userDetails);

  const {totalCards}=userDetails;

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

  const stars=mainCommonPageData.star_review;
  console.log(stars);



  console.log(mainCommonPageData);

  return (
    <>
    {check==="remove" || check==="favorite" ? <Header />:null}
    <div className="mt-[20px]">
      <h1
        style={{ fontFamily: "IvyMode, sans-serif" }}
        className="text-left font-normal text-[24px]  tracking-[1.19px] text-[#222222] opacity-100"
      >
        {mainCommonPageData.name}
      </h1>

      <div className="flex mt-[8px] items-center gap-[10px]">
        <div className="flex items-center justify-center">
        {(Array.isArray(stars) ? stars : Array.from({ length: Number(stars) || 0 })).map((_, index) => (
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
          {mainCommonPageData.star_review} .{" "}
          <span className="border-b">
            {mainCommonPageData.no_of_review} reviews
          </span>
        </span>
        <span
          style={{ fontFamily: "Brown, sans-serif" }}
          className=" text-left text-[10px] tracking-[0.31px] text-[#222222]"
        >
          . {mainCommonPageData.city}, {mainCommonPageData.country}
        </span>
      </div>

      <ImageGrid val={mainCommonPageData.image_main} status={mainCommonPageData.status} />

      <div className="px-[80px] flex justify-between mt-[25px] ">
        <CommonAbout datadetailedEvent={mainCommonPageData} />

        <ReserveCard check={check} datadetailedEvent={mainCommonPageData} />
      </div>

      <div className="flex px-[80px] flex-col w-[650px]">
        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="mt-[20px] text-left font-normal text-[20px]  tracking-[1.19px] text-[#222222] opacity-100"
        >
          Operator title
        </h1>
        <div className="flex items-start mt-[10px]  justify-start">
        {(Array.isArray(stars) ? stars : Array.from({ length: Number(stars) || 0 })).map((_, index) => (
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
          {mainCommonPageData.description}
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
            {totalCards.map((card3) => (
              <DashBoardCard3 key={card3.id} card3={card3} up={1} />
            ))}
          </div>
        </div>
      </div>
    </div>
    {check==="remove" || check==="favorite" ? <Footer />:null}
    </>
  );
}
