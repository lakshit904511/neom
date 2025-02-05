import Image from "../Img_Component/Image";

export default function DashBoardCard3({ card3, fav = null, up = null }) {
  return (
    <div className="w-[300px] h-[350px] flex flex-col items-start">
      {fav === null && up === null ? (
        <Image value={1} card3={card3} />
      ) : (
        <>
          {fav !== null && <Image value={3} card3={card3} />}
          {up !== null && <Image value={2} card3={card3} />}
        </>
      )}

      <p className="w-[200px] flex justify-between items-center mt-[2px]">
        <div className="flex items-center gap-1.5">
          <img className="w-[10px] h-[10px] " src={card3.icon} />
          <span
            style={{ fontFamily: "BrownLight, sans-serif" }}
            className="text-left text-[#222222] font-medium  text-[10px] leading-[18px]"
          >
            {card3.title}
          </span>
        </div>
        <span
          style={{ fontFamily: "BrownLight, sans-serif" }}
          className="text-right text-[#222222] text-[10px] tracking-[.79px] leading-[18px]  opacity-70"
        >
          {card3.date}
        </span>
      </p>
      <p
        style={{ fontFamily: "IvyMode, sans-serif" }}
        className="text-left text-[#222222]  text-[12px] leading-[20px] tracking-[0.59px] "
      >
        {card3.name}
      </p>
      <p
        style={{ fontFamily: "BrownLight, sans-serif" }}
        className="text-left text-[#222222]  text-[10px]  tracking-[0.62px] opacity-100"
      >
        {card3.time}
      </p>
    </div>
  );
}
