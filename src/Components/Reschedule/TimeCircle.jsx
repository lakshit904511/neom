export default function TimeCircle() {
  const timeData = [
    {
      label: "Days",
      value: 0,
      borderColor: "border-yellow-200",
    },
    {
      label: "Hours",
      value: 0,
      borderColor: "border-blue-400",
    },
    {
      label: "Minutes",
      value: 45,
      borderColor: "border-orange-300",
    },
    {
      label: "Seconds",
      value: 59,
      borderColor: "border-red-500",
     
    },
  ];

  return (
    <div className="absolute w-[400px] mx-auto top-[220px] flex justify-evenly items-center">
      {timeData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center rounded-[100px] w-[80px] h-[80px] border ${item.borderColor}`}
        >
          <p
            style={{ fontFamily: "Brown, sans-serif"}}
            className="text-sm text-[#ffffff] tracking-wide opacity-80 font-normal"
          >
            {item.label}
          </p>
          <p
            style={{ fontFamily: "Brown, sans-serif" }}
            className="text-[22px] tracking-wider text-[#ffffff] font-semibold"
          >
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
