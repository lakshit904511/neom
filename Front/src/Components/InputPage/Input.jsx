export default function Input({ labelName, typeName, nameType}) {
  return (
    <div>
      <label className="w-[194px] text-center text-[14px]  leading-[30px] tracking-wide text-[#222222] opacity-100">
        {labelName}
      </label>
      <br></br>
      <input
        style={{ fontFamily: "Brown, sans-serif" }}
        name={nameType}
        type={typeName}
        className=" outline-white mb-[10px] w-[320px] bg-white  h-[40px] border border-[#DDDDDD] rounded-[8px] placeholder: pl-2 text-[12px]"
      />
    </div>
  );
}
