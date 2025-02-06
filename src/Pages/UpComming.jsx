import { useState } from "react";
import { dataDashBoardCard3 } from "../assets/Dummy_Data/data";
import DashBoardCard3 from "../Components/DashboardCards/DashBoardCard3";

export default function UpComming() {
  const total = 3;

  return (
    <div className="mt-[36px] flex flex-col justify-center">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="mt-[20px] flex items-center gap-[15px]">
          {dataDashBoardCard3.map((card3) => (
            <DashBoardCard3 key={card3.id} card3={card3} up={1} />
          ))}
        </div>
      ))}

      <button
        style={{ fontFamily: "BrownLight, sans-serif" }}
        className="mx-auto text-[#ffffff] rounded-[8px] w-[142px] mt-[40px] px-[28px] py-[13px] bg-[#222222] flex items-center justify-center text-center"
      >
        Load More
      </button>
    </div>
  );
}
