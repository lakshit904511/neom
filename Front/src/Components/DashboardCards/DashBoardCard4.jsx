
import { IoIosStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function DashBoardCard4({ card4 }) {


  const navigate=useNavigate();


  return (
    <div className="w-[300px] h-[350px] flex flex-col items-start">
      <div className="flex items-center justify-center">
        <img
          onClick={()=>navigate("/details",{state: { text: null,val:card4 }})}
          className="w-[220px] h-[280px] object-cover rounded-[8px] cursor-pointer"
          src={card4.imageMain}
        />
      </div>
      <p style={{fontFamily:"IvyMode, sans-serif"}} className="mt-1.5 text-left font-semibold text-[14px] leading-[20px] tracking-[0.59px] text-[#222222] opacity-100 ">
        {card4.name}
      </p>
      <p style={{fontFamily:"BrownLight, sans-serif"}} className="mt-[3px] text-left  text-[10px] text-[#222222] opacity-100  ">
        {card4.lastEvent[0].guestNumber} guests attended this event
      </p>

      <span style={{fontFamily:"BrownLight, sans-serif"}} className="text-right text-[#222222] font-[brown] text-[12px]  leading-[18px]  opacity-70">
        on {card4.date}
      </span>

      <div className="mt-[6px]">
      {card4.lastEvent[0].eventRating!==null?<div style={{fontFamily:"BrownLight, sans-serif"}} className="flex gap-1 items-center text-left text-[#222222] font-[brown] text-[12px]  leading-[18px]  opacity-70">You rated this event <div className="flex ">{[...Array(5)].map((_,id)=>(<IoIosStar className=" text-black" key={id} />
))}</div></div>: <p style={{fontFamily:"Brown, sans-serif"}} className="text-center cursor-pointer underline text-[12px]   leading-[16px] tracking-[0.69px] text-[#222222] opacity-100">
          Rate this event
          </p>}
      </div>
    </div>
  );
}
