import over from "../Components/assets/img/overwhelmed.svg";
import { FaHeart  } from "react-icons/fa";

export default function HomePageCard3({ card3 }) {
  return (
    <div className="w-[300px] h-[350px] flex flex-col items-start">
      <div className="flex items-center justify-center relative">
       <FaHeart  className="absolute top-2 right-2 text-gray-600 "/>
       <h5 style={{WebkitTextStroke:"1px solid white"}} className="absolute right-0 text-9xl bottom-0 text-gray-400 opacity-70  ">{card3.id}</h5>
        <img
          className="w-[200px] h-[280px] object-cover rounded-[8px]"
          src={card3.image}
        />
      </div>
      <p className="w-[200px] flex justify-between items-center mt-[2px]">
        <div className="flex items-center gap-1.5">
          <img className="w-[10px] h-[10px] " src={card3.icon} />
          <span className="text-left text-[#222222] font-[brown] text-[10px] leading-[18px]">
            {card3.title}
          </span>
        </div>
        <span className="text-right text-[#222222] font-[brown] text-[10px]  leading-[18px]  opacity-70">
          {card3.date}
        </span>
      </p>
      <p className="text-left text-[#222222] font-ivymode text-[12px] leading-[20px] tracking-[0.59px] ">
        {card3.name}
      </p>
      <p className="text-left text-[#222222] font-brown text-[10px]  tracking-[0.62px] opacity-100">
        {card3.time}
      </p>
    </div>
  );
}
