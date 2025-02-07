import { FiHeart } from "react-icons/fi";

export default function Image({ value, card3 }) {
  if (value === 1) {
    return (
      <div className="flex items-center justify-center relative">
        <FiHeart
          className="absolute size-5 opacity-80 top-2 right-2 text-white "
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
          className="absolute right-1 text-[6rem] mb-[-18px] font-semibold bottom-0 text-gray-400 opacity-90  "
        >
          {card3.id}
        </div>
        <img
          className="w-[220px] h-[280px] object-cover rounded-[8px]"
          src={card3.image}
        />
      </div>
    );
  }

  if (value === 2) {
    return (
      <div className="flex items-center justify-center relative">
        <FiHeart className="absolute top-2 right-2 text-black " />
        <img
          className="w-[220px] h-[280px] object-cover rounded-[8px]"
          src={card3.image}
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
          className="w-[220px] h-[280px] object-cover rounded-[8px]"
          src={card3.image}
        />
      </div>
    );
  }
}
