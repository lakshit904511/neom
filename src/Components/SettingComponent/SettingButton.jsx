import { useState } from "react";
import { FaCircle } from "react-icons/fa";

export default function SettingButton({ value = null, text }) {
  const [select, setSelected] = useState(null);

  function handleSelect(value) {
    if (select === value) {
      setSelected(null);
    }
    if (select !== value) {
      setSelected(value);
    }
  }

  if (value === null) {
    return (
      <button
        onClick={() => handleSelect(1)}
        className={`mb-[20px] flex items-start justify-between w-[60px] px-1 py-1 border border-[#707070] rounded-[15px] ${
          select === 1 ? " bg-[#FF385C] border-[#FF385C]" : "bg-white"
        }`}
      >
        <FaCircle
          className={`w-[24px] transition-all duration-400 h-[24px] text-[#9A9A9A] ${
            select === 1 ? "translate-x-5 text-white" : "text-[#9A9A9A]"
          }`}
        />
      </button>
    );
  }
  if (value === 1) {
    return (
      <div className="flex items-center justify-center">
        <button
          onClick={() => handleSelect(2)}
          className={`mb-[20px] flex items-start justify-between w-[60px] px-1 py-1 border border-[#707070] rounded-[15px] ${
            select === 2 ? " bg-[#FF385C] border-[#FF385C]" : "bg-white"
          }`}
        >
          <FaCircle
            className={`w-[24px] transition-all duration-400 h-[24px] text-[#9A9A9A] ${
              select === 2 ? "translate-x-5 text-white" : "text-[#9A9A9A]"
            }`}
          />
        </button>
        <span className="pb-[20px] pl-[20px]">{text}</span>
      </div>
    );
  }
  if (value === 2) {
    return (
      <div className="flex items-center justify-center">
        <input
          onClick={() => handleSelect(3)}
          type="radio"
          className={`appearance-none mb-[20px] flex items-center justify-center w-[25px] h-[25px] border-2 rounded-full transition-all duration-300 relative
    ${
      select === 3
        ? "border-[#FF385C] bg-white after:content-[''] after:w-[13px] after:h-[13px] after:bg-[#FF385C] after:rounded-full after:absolute after:transition-all"
        : "border-[#707070] bg-white"
    }
  `}
        />

        <span className="pb-[20px] pl-[20px]">{text}</span>
      </div>
    );
  }
}
