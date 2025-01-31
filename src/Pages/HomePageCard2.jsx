import { MdOutlineStar } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import over from "../Components/assets/img/overwhelmed.svg";
import { CiGrid41 } from "react-icons/ci";
import mountain from '../Components/assets/img/mountain.jpg'
export default function HomePageCard2({ list }) {
  return (
    <div className="w-[520px] flex flex-col h-[290px] mt-[60px] border border-[#222222] bg-[#F9F7F2] rounded-[12px] opacity-100 flex justify-center items-center">
      <div className="w-[520px] h-[310px] overflow-hidden rounded-t-[12px]">
        <img className="w-full h-full object-cover" src={mountain} alt="golf" />
      </div>
      <div className="w-[520px] h-[120px] rounded-r-[12px]   flex flex-col items-start  bg-white">
        <h1
          className="w-[400px] text-left text-[18px] leading-[35px] tracking-[0.79px] text-[#222222] opacity-100
  "
        >
          Indulge in the Finest Epicurean Cuisines
        </h1>
        <p>on Nov 17, 2022</p>
        <p className="w-[510px] tracking-[.35px] text-left text-[#222222] text-[12px] leading-[15px] opacity-100 font-[brownlight]">
          Hi Charlie, we came to from our chef John that you didn't enjoyed the
          Epicurean cuisines yesterday. As a compensation we would like to offer
          you a free Italian cuisines as a goodwill gesture. Would you like to
          accept our request?
        </p>

        <ul className="w-[290px] mt-[18px] flex gap-1.5">
          <li className="flex items-center gap-2">
            <CiLocationOn className="w-[14px] h-[16px] text-[#FF385C]" />
            <span className=" w-[218px] text-left text-[11px] leading-[17px] tracking-[0.31px] text-[#222222] font-[brownlight]">
              Sindalah City
            </span>
          </li>
          <li className="flex items-center gap-2">
            <CiGrid41 className="w-[14px] h-[16px] text-[#FF385C]" />
            <span className=" w-[218px] text-left text-[11px] leading-[17px] tracking-[0.31px] text-[#222222] font-[brownlight]">
              Golf
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
