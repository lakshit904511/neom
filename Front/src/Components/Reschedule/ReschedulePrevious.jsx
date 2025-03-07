import { data, useNavigate } from "react-router-dom";
import { formatDate } from "../../util/DateFormatter";


export default function ReschedulePrevious({ event, handleClick }) {
  const navigate=useNavigate();

  return (
    <>
      <div className="relative flex mt-[30px] items-center justify-center w-[1129px] ">
        <img
          onClick={()=>navigate("/details2",{ state: { text: "res",data:event } })}
          className=" rounded-[14px] h-[430px] object-center w-full"
          src={event.image_main}
        />

        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="top-[100px] text-[30px] tracking-widest absolute  font-extrabold  text-center mx-auto text-[#ffffff]"
        >
          {event.name}
        </h1>

        <h1
          style={{ fontFamily: "Brown, sans-serif" }}
          className="top-[160px] font-normal text-[17px] tracking-wide absolute  text-center mx-auto text-[#ffffff]"
        >
          {event.city}
          {event.country}
        </h1>

        <h1
          style={{ fontFamily: "Brown, sans-serif" }}
          className="top-[205px] text-[17px] tracking-wide absolute  font-medium text-center mx-auto text-[#ffffff]"
        >
          {formatDate(event.start_date)}
        </h1>

        <h1
          style={{ fontFamily: "Brown, sans-serif" }}
          className="top-[230px] text-[17px] tracking-wide absolute  font-medium  text-center mx-auto text-[#ffffff]"
        >
          07:00 AM | 11:00 AM | 03:00 PM
        </h1>

        <button
          onClick={()=>handleClick(event)}
          className="bottom-[100px] cursor-pointer absolute text-[14px] tracking-wider mx-auto  bg-[#ffffff] text-black px-6 py-3 rounded-[8px] flex justify-evenly items-center"
        >
          Reschedule
        </button>
      </div>


    </>
  );
}
