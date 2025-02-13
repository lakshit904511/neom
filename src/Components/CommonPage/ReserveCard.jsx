export default function ReserveCard({check}) {
  return (
    <div
      className={`${
        check === "favorite" || check === "remove" ? "h-[260px]" : "h-[200px]"
      } w-[275px] mt-[10px] p-5 flex flex-col  bg-white bg-[0%_0%] bg-no-repeat bg-padding-box shadow-[0px_3px_16px_rgba(0,0,0,0.14)] border border-[#DDDDDD] rounded-[12px] opacity-100`}
    >
      <h1
        style={{ fontFamily: "Brown, sans-serif" }}
        className="text-left opacity-80 font-normal text-[16px]  tracking-[1.19px] text-[#222222]"
      >
        10:30 AM - 7:30 PM
      </h1>
      <div className="mt-3  flex flex-col">
        <div
          style={{ fontFamily: "Brown, sans-serif" }}
          className=" border-b  rounded-[4px] text-left   opacity-90  tracking-[.50px]  text-[12px] text-[#222222] p-2 flex justify-between border border-gray-300 "
        >
          <p>
            From<br></br>Nov 10, 2022
          </p>
          <p>
            To<br></br>Nov 29, 2022
          </p>
        </div>
        <div
          style={{ fontFamily: "Brown, sans-serif" }}
          className=" border-b  text-left   opacity-80  tracking-[.50px]  text-[12px] text-[#222222] p-2 flex justify-between border border-gray-300 "
        >
          <p>
            Guests<br></br>1 Adults
          </p>
        </div>
        {check === "favorite" || check === "remove" ? (
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
