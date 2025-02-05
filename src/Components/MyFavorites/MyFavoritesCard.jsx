import over from "../../assets/img/overwhelmed.svg";
import { FaHeart  } from "react-icons/fa";
export default function MyFavoritesCard({ favCard }) {
  return (
    <div className="relative ">
      <img
        className="w-[60vw] rounded-[8px] max-w-none h-[450px]"
        src={favCard.image}
      />

      <img
        className="absolute bottom-[41px] w-[16px] right-[83px]"
        src={over}
      />
      <span
        style={{ fontFamily: "BrownLight, sans-serif" }}
        className="absolute bottom-[41px] text-[#FFFFFF] text-[12px] right-[22px] "
      >
        Overwhelm
      </span>
      <FaHeart className="absolute w-[28px] top-[20px] right-[15px] text-gray-600 " />
      <h1
        style={{ fontFamily: "IvyMode, sans-serif" }}
        className="absolute bottom-[100px]  text-[30px] tracking-[1.10px] text-[#FFFFFF] text-left left-[40px] opacity-95"
      >
        {favCard.title}
      </h1>
      <p
        style={{ fontFamily: "BrownLight, sans-serif" }}
        className="absolute bottom-[60px] font-normal text-[15px] tracking-[.50px] text-[#FFFFFF] text-left left-[40px] opacity-95"
      >
        {favCard.date}
      </p>
      <p
        style={{ fontFamily: "BrownLight, sans-serif" }}
        className="absolute bottom-[32px] font-normal  text-[15px] tracking-[.50px] text-[#FFFFFF] text-left left-[40px] opacity-95"
      >
        {favCard.time}
      </p>
    </div>
  );
}
