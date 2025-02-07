import { IoMdStar } from "react-icons/io";
import FeedBackIcons from "./FeedBackIcons";

export default function FeedBackCard({ feed }) {
  return (
    <div className=" flex w-[720px] pb-[25px] border-b border-[#c0bdb3] ">
      <div className="relative w-[220px] h-[250px]">
        <img className="w-full h-full rounded-[8px]" src={feed.image} alt="Holiday" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <p
          style={{ fontFamily: "Brown, sans-serif" }}
          className="absolute text-left text-[14px] font-normal leading-[20px] tracking-[0.4px] text-white opacity-100 left-[15px] bottom-[62px]"
        >
          {feed.image_title}
        </p>
        <p className="absolute text-left text-[12px] font-normal leading-[20px] tracking-[0.4px] text-white opacity-100 left-[15px] bottom-[40px]">
          {feed.image_date}
        </p>
        <p className="absolute text-left text-[12px] underline font-normal leading-[20px] tracking-[0.4px] text-white opacity-100 left-[15px] bottom-[20px]">
          {feed.image_review}
        </p>
        <p className="w-[50px] h-[20px] absolute flex gap-1 items-center text-[12px]  font-normal leading-[20px] tracking-[0.4px] text-yellow-200   opacity-100 right-[15px] bottom-[20px]">
          <IoMdStar className="w-[15px]" />
          <span className="text-[12px]  font-normal leading-[20px] tracking-[0.4px] !text-white">
            4.9
          </span>
        </p>
      </div>

      <div className="w-[460px] pl-[30px] flex flex-col">
        <p
          style={{ fontFamily: "Brown, sans-serif" }}
          className="text-left text-[12px] leading-[28px] tracking-[0.60px] text-[#222222]  opacity-70"
        >
          {feed.date}
        </p>
        <p
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="w-[450px] text-left text-[18px] leading-[28px] font-medium tracking-[0.60px] text-[#222222]  opacity-100"
        >
          {feed.main_title}
        </p>

        {feed.main_para !== null ? (
          <p
            style={{ fontFamily: "BrownLight, sans-serif" }}
            className="mt-[10px] w-[550px]  text-justify text-[14px]  tracking-[0.15px] text-[#222222]  opacity-100"
          >
            {feed.main_para}
          </p>
        ) : (
          ""
        )}

        {feed.main_para !== null ? (
          <FeedBackIcons />
        ) : (
          <button
            style={{ fontFamily: "BrownLight, sans-serif" }}
            className=" text-[#ffffff] rounded-[4px] text-[14px] w-[147px] mt-[30px] px-[28px] py-[10px] bg-[#222222] flex items-center justify-center text-center"
          >
            Add a Review
          </button>
        )}
      </div>
    </div>
  );
}
