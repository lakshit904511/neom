import { CiLocationOn } from "react-icons/ci";
import '/src/index.css';
import store from "../../../Store";
import { eventFilter } from "../../Features/User/UserSlice";

export default function UpcommingButton2() {

  function handlechangeDate(e){
    const date=e.target.value;

    store.dispatch(eventFilter("date",date));
  }
  return (
    <div className="flex flex-col">
      <h1
        style={{ fontFamily: "BrownLight, sans-serif" }}
        className="text-left font-normal text-[13px] leading-[34px] tracking-[0px] text-[#222222] opacity-100"
      >
        What suits your schedules?
      </h1>
      <div className="w-[354px] flex  gap-[8px]">
        <div className="relative w-[180px] pl-[10px] bg-[#F9F7F2] border border-[#222222] rounded-[24px] opacity-80 h-[40px] flex  items-center gap-[5px] outline-none">
          
          <input type="date" onChange={handlechangeDate} className="z-50  flex w-[110px]  font-normal text-[12px]  tracking-[0px] text-[#222222] opacity-80 " />
           {/* <FaCalendar className="absolute right-[11px] top-[10px] w-[45px] text-[#FF385C]" /> */}
        </div>
        <div className="w-[260px] pl-[10px] bg-[#F9F7F2] border border-[#222222] rounded-[24px] opacity-80 h-[40px] flex  items-center gap-[5px]">
          <CiLocationOn className="text-[#FF385C]" />

          <button className="text-left  font-normal text-[12px]  tracking-[0px] text-[#222222] opacity-80">
            Pick a location
          </button>
        </div>
      </div>
    </div>
  );
}
