import { dataDashBoardCard3 } from "../assets/Dummy_Data/data";
import music from "../assets/img/music.jpg";
import DashBoardCard3 from "../Components/DashboardCards/DashBoardCard3";

export default function ReschedulePage() {
    const total=3;
  return (
    <section className="mt-[20px]">
      <div className="flex items-center justify-between pl-[28px] pr-[15px] py-[20px] w-full border border-[#222222] rounded-[12px]">
        <div className="flex w-full flex-col justify-between">
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="text-left font-normal text-[26px]  tracking-[1.19px] text-[#222222] opacity-100"
          >
            Hey Charlie,
          </h1>
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="mt-[5px] text-left tracking-[1px] font-normal text-[16px]  text-[#222222] opacity-100"
          >
            You have just cancelled your "Round of Golf" event. We have found a
            few similar event for you against your today's cancelled event. And
            one of them is just starting in an hour and 5 minutes drive away.
          </h1>
        </div>
      </div>

      <div className="relative flex mt-[30px] items-center justify-center w-full ">
        <img
          className=" rounded-[14px] h-[430px] object-cover w-full"
          src={music}
        />
        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="text-[30px] tracking-widest absolute  font-extrabold top-[40px] text-center mx-auto text-[#ffffff]"
        >
          Music
        </h1>
        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="text-[30px] tracking-widest absolute  font-extrabold top-[80px] text-center mx-auto text-[#ffffff]"
        >
          Jazz Concert
        </h1>
        <h1
          style={{ fontFamily: "Brown, sans-serif" }}
          className="text-[17px] tracking-wide absolute  font-medium top-[130px] text-center mx-auto text-[#ffffff]"
        >
          Sindalah City, Dubai
        </h1>
        <h1
          style={{ fontFamily: "Brown, sans-serif" }}
          className="text-[17px] tracking-wide absolute  font-medium top-[160px] text-center mx-auto text-[#ffffff]"
        >
          Jan 01, 2023 at 00:00
        </h1>

        <div className="absolute w-[400px] mx-auto top-[220px] flex justify-evenly items-center">
          <div className="flex flex-col items-center justify-center border border-yellow-200 rounded-[100px] w-[80px] h-[80px] ">
            <p
              style={{ fontFamily: "Brown, sans-serif" }}
              className="text-sm tracking-wide opacity-80 text-[#ffffff] font-normal"
            >
              Days
            </p>
            <p
              style={{ fontFamily: "Brown, sans-serif" }}
              className="text-[22px] tracking-wider font-semibold text-[#ffffff]"
            >
              0
            </p>
          </div>
          <div className="flex flex-col items-center justify-center border border-blue-400 rounded-[100px] w-[80px] h-[80px] ">
            <p
              style={{ fontFamily: "Brown, sans-serif" }}
              className="text-sm tracking-wide opacity-80 text-[#ffffff] font-normal"
            >
              Hours
            </p>
            <p
              style={{ fontFamily: "Brown, sans-serif" }}
              className="text-[22px] tracking-wider font-semibold text-[#ffffff]"
            >
              0
            </p>
          </div>
          <div className="flex flex-col items-center justify-center border border-orange-300 rounded-[100px] w-[80px] h-[80px] ">
            <p
              style={{ fontFamily: "Brown, sans-serif" }}
              className="text-sm tracking-wide opacity-80 text-[#ffffff] font-normal"
            >
              Minutes
            </p>
            <p
              style={{ fontFamily: "Brown, sans-serif" }}
              className="text-[22px] tracking-wider font-semibold text-[#ffffff]"
            >
              45
            </p>
          </div>
          <div className="flex flex-col items-center justify-center border border-red-500 rounded-[100px] w-[80px] h-[80px] ">
            <p
              style={{ fontFamily: "Brown, sans-serif" }}
              className="text-sm tracking-wide opacity-80 text-[#ffffff] font-normal"
            >
              Seconds
            </p>
            <p
              style={{ fontFamily: "Brown, sans-serif" }}
              className="text-[22px] tracking-wider font-semibold text-[#ffffff]"
            >
              59
            </p>
          </div>
        </div>

        <button className="absolute text-[14px] tracking-wider mx-auto bottom-[50px] bg-[#ffffff] text-black px-6 py-3 rounded-[8px] flex justify-evenly items-center">
          Yes I am in
        </button>
      </div>

      <h1
        style={{ fontFamily: "IvyMode, sans-serif" }}
        className="text-[26px] tracking-wide   font-normal mt-[60px] text-left mx-auto text-[#222222]"
      >
        Some similar recommendation for you, Charlie.
      </h1>

      <div className="w-[720px] mt-[15px] flex  gap-[15px]">
        <div
          style={{ fontFamily: "BrownLight, sans-serif" }}
          className="w-[350px] border border-[#222222] bg-[#F9F7F2] rounded-[24px] opacity-100
 flex"
        >
          <button
            className="rounded-l-[24px] tracking-[.30px] px-[15px] border-r border-[#222222] leading-[38px] text-left font-normal text-[11px]  text-[#222222] opacity-100 hover:bg-black hover:text-white
"
          >
            10 mins walking
          </button>
          <button
            className="tracking-[.30px] px-[15px] border-r border-[#222222] leading-[38px] text-left font-normal text-[11px]  text-[#222222] opacity-100 hover:bg-black hover:text-white
"
          >
            20 mins walking
          </button>
          <button
            className="rounded-r-[24px] tracking-[.30px] px-[15px] leading-[38px] text-left font-normal text-[11px]  text-[#222222] opacity-100 hover:bg-black hover:text-white
"
          >
            30 mins walking
          </button>
        </div>
        <div
          style={{ fontFamily: "BrownLight, sans-serif" }}
          className="w-[350px] border border-[#222222] bg-[#F9F7F2] rounded-[24px] opacity-100
 flex"
        >
          <button
            className="rounded-l-[24px] tracking-[.30px] px-[15px] border-r border-[#222222] leading-[38px] text-left font-normal text-[11px]  text-[#222222] opacity-100 hover:bg-black hover:text-white
"
          >
            10 mins Drive
          </button>
          <button
            className="tracking-[.30px] px-[15px] border-r border-[#222222] leading-[38px] text-left font-normal text-[11px]  text-[#222222] opacity-100 hover:bg-black hover:text-white
"
          >
            20 mins Drive
          </button>
          <button
            className="rounded-r-[24px] tracking-[.30px] px-[15px] leading-[38px] text-left font-normal text-[11px]  text-[#222222] opacity-100 hover:bg-black hover:text-white
"
          >
            30 mins Drive
          </button>
        </div>
      </div>
      <div className="mt-[16px] flex flex-col justify-center">
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className="mt-[20px] flex items-center gap-[15px]">
            {dataDashBoardCard3.map((card3) => (
              <DashBoardCard3 key={card3.id} card3={card3} up={1} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
