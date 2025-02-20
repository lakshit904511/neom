
export default function UpcommingButtons() {
  const buttonGroups = [
    {
      label: "Walking",
      options: ["10 mins walking", "20 mins walking", "30 mins walking"],
    },
    {
      label: "Driving",
      options: ["10 mins Drive", "20 mins Drive", "30 mins Drive"],
    },
  ];

  const TimeButtonGroup = ({ options }) => (
    <div
      style={{ fontFamily: "BrownLight, sans-serif" }}
      className="border border-[#222222] bg-[#F9F7F2]  rounded-[24px] opacity-80 flex"
    >
      {options.map((option, index) => (
        <button
          key={index}
          className={`${
            index === 0
              ? "rounded-l-[24px]"
              : index === options.length - 1
              ? "rounded-r-[24px]"
              : ""
          } tracking-wider px-[10px] border-r border-[#222222] leading-[38px] text-left font-normal text-[11px] text-[#222222] opacity-80 hover:bg-black hover:text-white`}
        >
          {option}
        </button>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col">
      <h1
        style={{ fontFamily: "BrownLight, sans-serif" }}
        className="text-left font-normal text-[12px] leading-[34px] tracking-[0px] text-[#222222] opacity-80"
      >
        How far are you willing to travel?
      </h1>
      <div className="flex gap-[10px]">
        {buttonGroups.map((group, index) => (
          <div key={index} className="flex gap-[15px]">
            <TimeButtonGroup options={group.options} />
          </div>
        ))}
      </div>
    </div>
  );
}
