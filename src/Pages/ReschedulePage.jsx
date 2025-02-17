import { useLocation} from "react-router-dom";
import music from "../assets/img/music.jpg";
import golf from "../assets/img/golf.jpg";

import DashBoardCard3 from "../Components/DashboardCards/DashBoardCard3";
import UpcommingButtons from "../Components/Upcomming/UpcommingButtons";
import GolfMatch from "../Components/Modals/GolfMatch";
import { useState } from "react";
import TimeCircle from "../Components/Reschedule/TimeCircle";
import serverData from "../assets/Dummy_Data/serverData";
import fullCardDetails from "../assets/Dummy_Data/fullCardDetails";


export default function ReschedulePage() {


  const [golfModal, setGolfModal] = useState(false);

  const upcommingeventCards = serverData[0].upcommingEvents.flatMap(eventId =>
    fullCardDetails.filter(onecardData => onecardData.id === eventId)
  );

  const value = useLocation();
  var check;

  if (value.state === null) {
    check = "";
  } else {
    check = value.state.text;
  }

  function handleClick() {
    setGolfModal(true);
  }

  function closeModal() {
    setGolfModal(false);
  }


  return (
    <section className="mt-[20px]">
      <div className="flex items-center justify-between pl-[28px] pr-[15px] py-[20px] w-full border border-[#222222] rounded-[12px]">
        <div className="flex w-full flex-col justify-between">
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="text-left font-normal text-[26px]  tracking-[1.19px] text-[#222222] opacity-100"
          >
            Hey Charlie,
          </h1>
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="mt-[5px] text-left tracking-[1px] font-normal text-[16px]  text-[#222222] opacity-100"
          >
            {check === 1
              ? "We have a few similar event for you against your today's rescheduled event of Round of Golf. And one of them is just starting in an hour and 5 minutes drive away."
              : "You have just cancelled your Round of Golf event. We have found a few similar event for you against your today's cancelled event one of them is just starting in an hour and 5 minutes drive away"}
          </h1>
        </div>
      </div>

      <div className="relative flex mt-[30px] items-center justify-center w-full ">
        <img
          className=" rounded-[14px] h-[430px] object-center w-full"
          src={check === 1 ? golf : music}
        />

        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className={`${
            check == 1 ? "top-[100px]" : "top-[40px]"
          } text-[30px] tracking-widest absolute  font-extrabold  text-center mx-auto text-[#ffffff]`}
        >
          {check == 1 ? "Round of Golf" : "Music"}
        </h1>


        {check === 1 ? (
          ""
        ) : (
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="text-[30px] tracking-widest absolute  font-extrabold top-[80px] text-center mx-auto text-[#ffffff]"
          >
            Jazz Concert
          </h1>
        )}


        <h1
          style={{ fontFamily: "Brown, sans-serif" }}
          className={`${
            check == 1 ? "top-[160px] font-normal" : "top-[40px] font-medium"
          } text-[17px] tracking-wide absolute   top-[130px] text-center mx-auto text-[#ffffff]`}
        >
          {check === 1 ? "Sindalah Island" : "Sindalah City, Dubai"}
        </h1>


        <h1
          style={{ fontFamily: "Brown, sans-serif" }}
          className={`${
            check == 1 ? "top-[205px]" : "top-[40px]"
          } text-[17px] tracking-wide absolute  font-medium top-[160px] text-center mx-auto text-[#ffffff]`}
        >
          {check === 1 ? "Jan 01, 2023" : "Jan 01, 2023 at 00:00"}
        </h1>



        {check === 1 ? (
          <h1
            style={{ fontFamily: "Brown, sans-serif" }}
            className={`${
              check == 1 ? "top-[230px]" : "top-[40px]"
            } text-[17px] tracking-wide absolute  font-medium top-[160px] text-center mx-auto text-[#ffffff]`}
          >
            {check === 1 ? "07:00 AM | 11:00 AM | 03:00 PM" : ""}
          </h1>
        ) : (
          ""
        )}

        {check === 2 ? <TimeCircle /> : ""}

        <button
          onClick={check === 1 ? handleClick : null}
          className={`${
            check == 1 ? "bottom-[100px]" : "bottom-[50px]"
          } absolute text-[14px] tracking-wider mx-auto  bg-[#ffffff] text-black px-6 py-3 rounded-[8px] flex justify-evenly items-center`}
        >
          {check === 1 ? "Reschedule" : "Yes I am in"}
        </button>
      </div>

      <h1
        style={{ fontFamily: "IvyMode, sans-serif" }}
        className="text-[26px] tracking-wide   font-normal mt-[60px] text-left mx-auto text-[#222222]"
      >
        Some similar recommendation for you, Charlie.
      </h1>

      <div className="w-[720px] mt-[15px] flex  gap-[15px]">
        <UpcommingButtons />
      </div>


      <div className="mt-[16px] flex flex-col justify-center">
        
          <div  className="mt-[20px] grid grid-cols-5 items-center gap-[15px]">
            {upcommingeventCards.map((card3) => (
              <DashBoardCard3 key={card3.id} card3={card3} up={1} />
            ))}
          </div>
       
      </div>

      {golfModal && <GolfMatch closeModal={closeModal} />}
    </section>
  );
}
