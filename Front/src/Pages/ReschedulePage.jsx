import { useLocation } from "react-router-dom";
import { Swiper } from "swiper/react";
import {SwiperSlide } from "swiper/react";
import GolfMatch from "../Components/Modals/GolfMatch";
import "swiper/css";
import DashBoardCard3 from "../Components/DashboardCards/DashBoardCard3";
import UpcommingButtons from "../Components/Upcomming/UpcommingButtons";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useSelector } from "react-redux";
import ReschedulePrevious from "../Components/Reschedule/ReschedulePrevious";
import UpcomingSchedule from "../Components/Reschedule/UpcomingSchedule";
import { useState } from "react";

export default function ReschedulePage() {
  const userDetails = useSelector((store) => store.user);
  const { authorized, fullName, totalCards, scheduledEvents } = userDetails;
  const [golfModal, setGolfModal] = useState(false);
  const [carddata,setCarddata]=useState(null);
  
  const rescheduleEvents = scheduledEvents.slice(1, 4);
  const afterRescheduleEvent = totalCards.slice(17, 23);


  function handleClick(event) {
    console.log(event);
    setCarddata(event);
    setGolfModal(true);
  }

  function closeModal() {
    setGolfModal(false);
  }

  const value = useLocation();
  var check;

  if (value.state === null) {
    check = "";
  } else {
    check = value.state.text;
  }

  return (
    <>
      <Header />
      <section className="mt-[20px]">
        <div className="flex items-center justify-between pl-[28px] pr-[15px] py-[20px] w-full border border-[#222222] rounded-[12px]">
          <div className="flex w-full flex-col justify-between">
            <h1
              style={{ fontFamily: "IvyMode, sans-serif" }}
              className="text-left font-normal text-[26px]  tracking-[1.19px] text-[#222222] opacity-100"
            >
              Hey {authorized !== null ? fullName : "Charlie"},
            </h1>
            <h1
              style={{ fontFamily: "IvyMode, sans-serif" }}
              className="mt-[5px] text-left tracking-[1px] font-normal text-[16px]  text-[#222222] opacity-100"
            >
              {check === 1
                ? "We have a few similar event for you against your today's rescheduled event of Round of Golf. And one of them is just starting in an hour and 5 minutes drive away."
                : `You have just ${carddata===null?"cancelled":"Rescheduled"} your ${carddata===null?"Round of Golf":carddata.name} event. We have found a few similar event for you against your today's cancelled event one of them is just starting in an hour and 5 minutes drive away`}
            </h1>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          {check === 1 ? (
            <Swiper spaceBetween={40} loop={true}>
              <div className="relative flex gap-[20px]">
                {rescheduleEvents.map((event) => (
                  <SwiperSlide>
                    <ReschedulePrevious key={event.id} event={event} handleClick={handleClick}/>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          ) : (
            <Swiper spaceBetween={50} loop={true}>
              <div className="relative flex gap-[20px]">
                {afterRescheduleEvent.map((event) => (
                  <SwiperSlide>
                    <UpcomingSchedule key={event.id} event={event} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          )}
        </div>
        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="text-[26px] tracking-wide   font-normal mt-[60px] text-left mx-auto text-[#222222]"
        >
          Some similar recommendation for you,{" "}
          {authorized !== null ? fullName : "Charlie"},.
        </h1>

        <div className="w-[720px] mt-[15px] flex  gap-[15px]">
          <UpcommingButtons />
        </div>

        <div className="mt-[16px] flex flex-col justify-center">
          <div className="mt-[20px] grid grid-cols-5 items-center gap-[15px]">
            {totalCards.slice(0, 10).map((card3) => (
              <DashBoardCard3 key={card3.id} card3={card3} up={1} />
            ))}
          </div>
        </div>
      </section>
      
      {golfModal && <GolfMatch closeModal={closeModal} carddata={carddata}/>}
      <Footer />

    </>
  );
}
