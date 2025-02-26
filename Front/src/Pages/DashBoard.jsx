import { useState } from "react";
import { Outlet } from "react-router-dom";
import { dataDashBoardCard2 } from "../assets/Dummy_Data/data";
import Slider from "../Components/Slider/Slider";
import DashBoardCard1 from "../Components/DashboardCards/DashBoardCard1";
import DashBoardCard3 from "../Components/DashboardCards/DashBoardCard3";
import DashBoardCard4 from "../Components/DashboardCards/DashBoardCard4";
import DashBoardCard2 from "../Components/DashboardCards/DashBoardCard2";
import DashBoardMain from "../Components/DashboardCards/DashBoardMain";
import Map from "../Components/DashboardCards/Map";
import userData from "../assets/Dummy_Data/userData";
import fullCardDetails from "../assets/Dummy_Data/fullCardDetails";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useSelector } from "react-redux";

export default function DashBoard() {

  const userDetails=useSelector((store)=>store.user);
  console.log(userDetails);

  const {authorized,fullName,scheduledEvents,attendedEvents,serverTopEventLists}=userDetails;

  console.log(scheduledEvents);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexCard2, setCurrentIndexCard2] = useState(0);

  const itemsPerView = 2;
  const itemsPerViewCard2 = 2;

  // cards jo schedule honge starting mai hi data for card1 in dashboard
  // const filteroutCards = userData[0].scheduledEventCards.flatMap((eventId) =>
  //   fullCardDetails.filter((onecardData) => onecardData.id === eventId)
  // );


  const goToPrevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNextImage = () => {
    if (currentIndex < scheduledEvents.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const goToPrevImageCard2 = () => {
    if (currentIndexCard2 > 0) {
      setCurrentIndexCard2(currentIndexCard2 - 1);
    }
  };

  const goToNextImageCard2 = () => {
    if (currentIndexCard2 < dataDashBoardCard2.length - itemsPerViewCard2) {
      setCurrentIndexCard2(currentIndexCard2 + 1);
    }
  };

  return (
    <>
      <Header />
      <section className="mt-[1.25rem] ">
        <h2
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="w-[23.44rem] h-[3.25rem] text-left text-[1.5rem] leading-[2.75rem] tracking-[0.0725rem]
 text-[#222222]"
        >
          Good morning {authorized===true?fullName:"Charlie"}
        </h2>

        <p
          className="w-[28.125rem] h-[2.875rem] text-left text-[0.8125rem] leading-[1.25rem]
 tracking-wide text-[#222222] font-[BrownLight] opacity-100"
        >
          Below listed are your itineraries, have a look to the timings and the
          location. We wish you to enjoy the activities and the weather!
        </p>

        <div className="relative ">
          <DashBoardMain
            data={scheduledEvents}
            itemsPerView={itemsPerView}
            currentIndex={currentIndex}
            renderItem={(list) => <DashBoardCard1 key={list.id} list={list} />}
          />
        </div>

        <Slider
          value={1}
          scheduledEvents={scheduledEvents}
          goToPrevImage={goToPrevImage}
          goToNextImage={goToNextImage}
          currentIndex={currentIndex}
          itemsPerView={itemsPerView}
        />

        <div className="mt-[55px]">
          <h2
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="w-[500px] text-left text-[26px] leading-[28px] tracking-[1.19px] text-[#222222]"
          >
            Charlie, hope we understand you better
          </h2>

          <div className="relative ">
            <DashBoardMain
              data={dataDashBoardCard2}
              itemsPerView={itemsPerViewCard2}
              currentIndex={currentIndexCard2}
              renderItem={(card2) => (
                <DashBoardCard2 key={card2.id} card2={card2} />
              )}
            />
            <Outlet />
          </div>

          <Slider
            value={2}
            goToNextImageCard2={goToNextImageCard2}
            goToPrevImageCard2={goToPrevImageCard2}
            currentIndexCard2={currentIndexCard2}
            itemsPerViewCard2={itemsPerViewCard2}
          />
        </div>

        {/* card3 */}
        <div className="mt-[60px]">
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="w-[550px] text-left text-[#222222] tracking-[1px] text-[26px]  "
          >
            Today's recommendations for you, Charlie!
          </h1>
          <div className="mt-[30px] flex items-center gap-[10px]">
            {serverTopEventLists.map((card3) => (
              <DashBoardCard3 key={card3.id} card3={card3} />
            ))}
          </div>
        </div>

        {/* card4 */}

        <div className="mt-[90px]">
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="w-[700px] text-left text-[#222222] tracking-[1px] text-[26px]"
          >
            Charlie, here is your master journey with us so far
          </h1>
          <div className="mt-[30px] flex items-center gap-[10px]">
            {attendedEvents.map((card4) => (
              <DashBoardCard4 key={card4.id} card4={card4} />
            ))}
          </div>
        </div>

        {/* map */}

        <div className="mt-[105px]">
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="text-center text-3xl tracking-[.69px]"
          >
            Find events on map
          </h1>
          <Map />
        </div>
      </section>
      <Footer />
    </>
  );
}
