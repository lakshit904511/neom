
import { GoHeartFill } from "react-icons/go";
import { data, useNavigate } from "react-router-dom";

export default function Image({ value, card3 }) {
  const navigate=useNavigate();
  if (value === 1) {
    return (
      <div className="flex items-center justify-center relative">
        <GoHeartFill 

          className="absolute size-6 opacity-50 top-3 right-3 text-white "
          style={{
            stroke: "white", 
            strokeWidth: "2px", 
            fill: "black", 
          }}
        />
        <div
          style={{
            WebkitTextStroke: "1px white",
            WebkitTextFillColor: "rgba(156, 163, 175, 0.5)",
          }}
          className="absolute right-1 text-[6rem]  mb-[-18px] font-extrabold bottom-0 text-gray-400 opacity-90  "
        >
          {card3.top_event_id}
        </div>
        <img
          onClick={()=>(navigate("/details2",{state:{text:"top",data:card3}}))}
          className="w-[220px] h-[280px] object-cover cursor-pointer rounded-[8px]"
          src={card3.image_main}
        />
      </div>
    );
  }

  if (value === 2) {
    return (
      <div className="flex items-center justify-center relative">
        <GoHeartFill className="absolute size-6 top-3 right-3 text-black " />
        <img
         onClick={()=>(navigate("/details2",{ state: { text: "favorite",data:card3 } }))}
          className="w-[220px] h-[280px] object-cover rounded-[8px] cursor-pointer"
          src={card3.image_main}
        />
      </div>
    );
  }

  if (value === 3) {
    return (
      <div className="flex items-center justify-center relative">
        <a
          style={{ fontFamily: "Brown, sans-serif" }}
          className="cursor-pointer text-[10px] absolute flex items-center justify-center  top-3 right-2 text-[#FF385C] bg-white py-1 px-3 tracking-wide rounded-2xl"
        >
          Remove
        </a>
        <img
          onClick={()=>(navigate("/details2",{ state: { text: "remove",data:card3 } }))}
          className="w-[220px] h-[280px] object-cover cursor-pointer rounded-[8px]"
          src={card3.image_main}
        />
      </div>
    );
  }
}
