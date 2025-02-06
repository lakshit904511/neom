import { FaCircle } from "react-icons/fa";

export default function SettingButton({ value = null, text }) {
  if (value === null) {
    return (
      <button onClick={()=>{}} className="mb-[20px] flex items-start justify-between w-[60px] px-1 py-1 border border-[#707070] rounded-[15px]">
        <FaCircle className="w-[24px] h-[24px] text-[#9A9A9A]" />
      </button>
    );
  }
  if (value === 1) {
    return (
      <div className="flex items-center justify-center">
        <button className="mb-[20px] flex items-start justify-between w-[60px] px-1 py-1 border border-[#707070] rounded-[15px]">
          <FaCircle className="w-[24px] h-[24px] text-[#9A9A9A]" />
        </button>
        <span className="pb-[20px] pl-[20px]">{text}</span>
      </div>
    );
  }
  if (value === 2) {
    return (
      <div className="flex items-center justify-center">
        <input
          type="radio"
          className="mb-[20px] flex items-start justify-between w-[25px] h-[60px] px-1 py-1 border border-[#707070] rounded-[15px]"
        ></input>
        <span className="pb-[20px] pl-[20px]">{text}</span>
      </div>
    );
  }
}
