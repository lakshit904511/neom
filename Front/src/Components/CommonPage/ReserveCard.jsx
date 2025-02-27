import { formatDate, formatEventShortDate, formatEventTime } from "../../util/DateFormatter";

export default function ReserveCard({check,datadetailedEvent}) {
  console.log(datadetailedEvent);
  return (
    <div
      className={`${
        check === "favorite" || check === "remove" || check === "top" ? "h-[260px]" : "h-[200px]"
      } w-[275px] mt-[10px] p-5 flex flex-col  bg-white bg-[0%_0%] bg-no-repeat bg-padding-box shadow-[0px_3px_16px_rgba(0,0,0,0.14)] border border-[#DDDDDD] rounded-[12px] opacity-100`}
    >
      <h1
        style={{ fontFamily: "Brown, sans-serif" }}
        className="text-left opacity-80 font-normal text-[16px]  tracking-[1.19px] text-[#222222]"
      >
        {formatEventTime(datadetailedEvent.start_date,datadetailedEvent.end_date)}
      </h1>
      <div className="mt-3  flex flex-col">
        <div
          style={{ fontFamily: "Brown, sans-serif" }}
          className=" border-b  rounded-[4px] text-left   opacity-90  tracking-[.50px]  text-[12px] text-[#222222] p-2 flex justify-between border border-gray-300 "
        >
          <p>
            From<br></br>{formatDate(datadetailedEvent.start_date)}
          </p>
          <p>
            To<br></br>{formatDate(datadetailedEvent.end_date)}
          </p>
        </div>
        <div
          style={{ fontFamily: "Brown, sans-serif" }}
          className=" border-b  text-left   opacity-80  tracking-[.50px]  text-[12px] text-[#222222] p-2 flex justify-between border border-gray-300 "
        >
          <p>
            Guests<br></br>{datadetailedEvent.guest!==null?datadetailedEvent.guest:1} Adults
          </p>
        </div>
        {check === "favorite" || check === "remove" || check==="top" ? (
          <div className="flex flex-col">
            <p
              style={{ fontFamily: "Brown, sans-serif" }}
              className="   text-left   opacity-60  tracking-[.50px]  text-[14px] text-[#222222] flex justify-between mt-[8px] "
            >
              172 seats available
            </p>
            <button
              style={{ fontFamily: "BrownLight, sans-serif" }}
              className="w-full text-[#ffffff] rounded-[4px] text-[14px] mt-[10px] px-[24px] py-[8px] bg-[#222222] flex items-center justify-center text-center"
            >
              Reserve my seat
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
