export default function DetailedPage() {
  return (
    <section className="mt-[20px]">
      <div className="flex items-center justify-between px-[30px] py-[20px] w-full border border-[#222222] rounded-[12px]">
        <div className="flex w-[800px] flex-col justify-between">
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="text-left font-normal text-[32px]  tracking-[1.19px] text-[#222222] opacity-100"
          >
            Hey Charlie,
          </h1>
          <h1 style={{ fontFamily: "IvyMode, sans-serif" }} className="mt-[5px] text-left tracking-[1.10px] font-normal text-[18px]  text-[#222222] opacity-100">
            We are sure that you have enjoyed this event a lot. Would you like
            to share your feedback with us. It helps us to improve and serve you
            better.
          </h1>
        </div>
        <button
          style={{ fontFamily: "BrownLight, sans-serif" }}
          className=" text-[#ffffff] rounded-[4px]  px-8 py-3 bg-[#222222] flex items-center justify-center text-center"
        >
          Add a review
        </button>
      </div>
    </section>
  );
}
