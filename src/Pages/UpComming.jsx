import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { dataFilters } from "../assets/Dummy_Data/data";
import { dataDashBoardCard3 } from "../assets/Dummy_Data/data";
import DashBoardCard3 from "../Components/DashboardCards/DashBoardCard3";

export default function UpComming() {
  const total = 3;

  return (
    <>
      <h1
        style={{ fontFamily: "IvyMode, sans-serif" }}
        className="mt-[30px] text-left font-normal text-[28px]  tracking-[1.19px] text-[#222222] opacity-100"
      >
        Hey Charlie,
      </h1>
      <h1
        style={{ fontFamily: "IvyMode, sans-serif" }}
        className="mt-[3px] text-left tracking-[1.10px] font-normal text-[18px]  text-[#222222] opacity-100"
      >
        Let's find something exiting for you.
      </h1>
      <div className="mt-[20px] flex flex-col items-start w-full">
        <div className="flex justify-center items-start gap-[40px]">
          <div className="flex flex-col gap-[10px]">
            <h1
              style={{ fontFamily: "BrownLight, sans-serif" }}
              className="text-left font-normal text-[18px] leading-[44px] tracking-[0px] text-[#222222] opacity-100"
            >
              What suits your schedules?
            </h1>
            <div className="w-[400px] flex  gap-[20px]">
              <div className="w-[120px] pl-[10px] bg-[#F9F7F2] border border-[#222222] rounded-[24px] opacity-100 h-[40px] flex  items-center gap-[5px]">
                <CiCalendar className="text-[#FF385C]" />
                <button className="text-left  font-normal text-[12px]  tracking-[0px] text-[#222222] opacity-100">
                  Pick a date
                </button>
              </div>
              <div className="w-[260px] pl-[10px] bg-[#F9F7F2] border border-[#222222] rounded-[24px] opacity-100 h-[40px] flex  items-center gap-[5px]">
                <CiLocationOn className="text-[#FF385C]" />

                <button className="text-left  font-normal text-[12px]  tracking-[0px] text-[#222222] opacity-100">
                  Pick a location
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1
              style={{ fontFamily: "BrownLight, sans-serif" }}
              className="text-left font-normal text-[18px] leading-[44px] tracking-[0px] text-[#222222] opacity-100"
            >
              How far are you willing to travel?
            </h1>
            <div className="w-[770px] flex  gap-[15px]">
              <div
                style={{ fontFamily: "BrownLight, sans-serif" }}
                className="w-[365px] border border-[#222222] bg-[#F9F7F2] rounded-[24px] opacity-100
 flex"
              >
                <button
                  className="rounded-l-[24px] tracking-[.30px] px-[20px] border-r border-[#222222] leading-[38px] text-left font-normal text-[11px]  text-[#222222] opacity-100 hover:bg-black hover:text-white
"
                >
                  10 mins walking
                </button>
                <button
                  className="tracking-[.30px] px-[20px] border-r border-[#222222] leading-[38px] text-left font-normal text-[11px]  text-[#222222] opacity-100 hover:bg-black hover:text-white
"
                >
                  20 mins walking
                </button>
                <button
                  className="rounded-r-[24px] tracking-[.30px] px-[20px] leading-[38px] text-left font-normal text-[11px]  text-[#222222] opacity-100 hover:bg-black hover:text-white
"
                >
                  30 mins walking
                </button>
              </div>
              <div
                style={{ fontFamily: "BrownLight, sans-serif" }}
                className="w-[325px] border border-[#222222] bg-[#F9F7F2] rounded-[24px] opacity-100
 flex"
              >
                <button
                  className="rounded-l-[24px] tracking-[.30px] px-[20px] border-r border-[#222222] leading-[38px] text-left font-normal text-[11px]  text-[#222222] opacity-100 hover:bg-black hover:text-white
"
                >
                  10 mins Drive
                </button>
                <button
                  className="tracking-[.30px] px-[20px] border-r border-[#222222] leading-[38px] text-left font-normal text-[11px]  text-[#222222] opacity-100 hover:bg-black hover:text-white
"
                >
                  20 mins Drive
                </button>
                <button
                  className="rounded-r-[24px] tracking-[.30px] px-[20px] leading-[38px] text-left font-normal text-[11px]  text-[#222222] opacity-100 hover:bg-black hover:text-white
"
                >
                  30 mins Drive
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-[30px] flex-col gap-[10px]">
          <h1
            style={{ fontFamily: "BrownLight, sans-serif" }}
            className="text-left font-normal text-[18px] leading-[44px] tracking-[0px] text-[#222222] opacity-100"
          >
            You can always filter out the events by category wise.
          </h1>
          <div className="w-[1100px] flex  gap-[15px]">
            {dataFilters.map((filt1) => {
              return (
                <div
                  style={{ fontFamily: "BrownLight, sans-serif" }}
                  className="group w-[125px] border cursor-pointer flex justify-center items-center border-[#222222] bg-[#F9F7F2] rounded-[24px] opacity-100
            hover:bg-black hover:text-white transition-all duration-300"
                >
                  <button className="tracking-[.70px] cursor-pointer leading-[38px] text-center font-normal text-[12px] text-[#222222] group-hover:text-white opacity-100">
                    {filt1}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>

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

    </>
  );
}
