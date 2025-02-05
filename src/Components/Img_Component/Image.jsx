import { FaHeart  } from "react-icons/fa";

export default function Image({value,card3}) {
  if (value === 1) {
    return (
      <div className="flex items-center justify-center relative">
        <FaHeart className="absolute top-2 right-2 text-gray-600 " />
        <h5
          style={{ WebkitTextStroke: "1px solid white" }}
          className="absolute right-0 text-9xl bottom-0 text-gray-400 opacity-70  "
        >
          {card3.id}
        </h5>
        <img
          className="w-[230px] h-[280px] object-cover rounded-[8px]"
          src={card3.image}
        />
      </div>
    );
  }

  if (value === 2) {
    return (
      <div className="flex items-center justify-center relative">
        <FaHeart className="absolute top-2 right-2 text-black " />
        <img
          className="w-[230px] h-[280px] object-cover rounded-[8px]"
          src={card3.image}
        />
      </div>
    );
  }

  if (value === 3) {
    return (
      <div className="flex items-center justify-center relative">
        <a style={{fontFamily:"Brown, sans-serif"}}  className="cursor-pointer absolute flex items-center justify-center text-[8px] top-2 right-2 text-[#FF385C] bg-white py-1 px-3 tracking-wide rounded-2xl">
          Remove
        </a>
        <img
          className="w-[230px] h-[280px] object-cover rounded-[8px]"
          src={card3.image}
        />
      </div>
    );
  }
}
