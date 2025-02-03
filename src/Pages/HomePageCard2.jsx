
export default function HomePageCard2({ card2,handleClickReview }) {

  return (
    <>
      <div className="flex flex-col items-start w-[520px] h-[490px]">
        <div className="flex items-center w-[510px] h-[310px] relative">
          <img
            className=" absolute w-[28px] top-[30px] left-[10px] object-cover"
            src={card2.emoji}
          />
          <img
            className="w-[510px] h-[280px] rounded-[10px]"
            src={card2.image}
            alt="mountainImage"
          />
        </div>
        <span className=" w-[350px] text-left text-[15px] font-semibold leading-[20px] tracking-[0.59px] text-[#222222] font-[IvyMode] ">
          {card2.title}
        </span>
        <span className="mt-[4px] text-left text-[12px] font-normal text-[#222222] opacity-70 font-[Brown]">
          on Nov 17, 2022
        </span>
        <p className="w-[490px] mt-[12px] text-[15px] font-normal leading-[21px] opacity-100 text-[#6f6f6f] font-[BrownLight] text-justify">
          {card2.description}
        </p>
        <div className="mt-[22px] flex gap-[24px]">
          <button
            onClick={card2.textBtn === "Yes, I would Share"? handleClickReview:null}
            className="bg-[#222222] cursor-pointer rounded-[6px] text-white px-9 py-2 text-[10px]"
          >
            {card2.textBtn}
          </button>
          <button className="text-center underline text-[12px] font-normal leading-[16px] tracking-[0px] text-[#5b5b5b] opacity-100 font-[Poppins]">
            {card2.textBtn2}
          </button>
        </div>
      </div>
      
    </>
  );
}
