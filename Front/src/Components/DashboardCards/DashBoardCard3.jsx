import Image from "../Img_Component/Image";

export default function DashBoardCard3({ card3, fav = null, up = null }) {
  return (
    <div className="w-[217px] h-[350px] flex flex-col items-start">
      {fav === null && up === null ? (
        <Image value={1} card3={card3} />
      ) : (
        <>
          {fav !== null && <Image value={3} card3={card3} />}
          {up !== null && <Image value={2} card3={card3} />}
        </>
      )}

      <p className="w-[220px] flex justify-between items-center mt-[6px]">
        <div className="flex items-center gap-1.5">
          <img className="w-[10px] h-[10px] " src={card3.favIcon} />
          <span
            style={{ fontFamily: "BrownLight, sans-serif" }}
            className="text-left text-[#222222] font-medium  text-[10px] leading-[18px]"
          >
            {card3.favTitle}
          </span>
        </div>
        <span
          style={{ fontFamily: "BrownLight, sans-serif" }}
          className="text-right text-[#222222] text-[10px] tracking-[.79px] leading-[18px]  opacity-70"
        >
          Nov 10-29
        </span>
      </p>
      <p
        style={{ fontFamily: "IvyMode, sans-serif" }}
        className="text-left text-[#222222] mt-[5px]  text-[12px] leading-[20px] tracking-[0.80px] "
      >
        {card3.favName}
      </p>
      <p
        style={{ fontFamily: "BrownLight, sans-serif" }}
        className="text-left text-[#222222]  text-[10px]  tracking-[0.62px] opacity-100"
      >
        10:30 AM - 7:30 PM
      </p>
    </div>
  );
}
