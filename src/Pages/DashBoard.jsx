import { useState } from "react";
import Header from "../Components/Header/header";
import { Outlet } from "react-router-dom";
import { dataDashBoardCard2 } from "../assets/Dummy_Data/data";
import { dataDashBoardCard3 } from "../assets/Dummy_Data/data";
import { dataDashBoardCard4 } from "../assets/Dummy_Data/data";
import { dataDashBoardCard1 } from "../assets/Dummy_Data/data";
import Slider from "../Components/Slider/Slider";
import DashBoardCard1 from "../Components/DashboardCards/DashBoardCard1";
import DashBoardCard3 from "../Components/DashboardCards/DashBoardCard3";
import DashBoardCard4 from "../Components/DashboardCards/DashBoardCard4";
import DashBoardCard2 from "../Components/DashboardCards/DashBoardCard2";
import DashBoardMain from "../Components/DashboardCards/DashBoardMain";

export default function DashBoard({ handleClickReview }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexCard2, setCurrentIndexCard2] = useState(0);

  const itemsPerView = 2;
  const itemsPerViewCard2 = 2;

  const goToPrevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNextImage = () => {
    if (currentIndex < dataDashBoardCard1.length - itemsPerView) {
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
      <section className="mt-[29px] ">
        <h2
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="w-[375px] h-[52px] text-left text-[25px] leading-[44px] tracking-[1.16px] text-[#222222]"
        >
          Good morning Charlie!
        </h2>

        <p className="w-[602px] h-[46px] text-left text-[18px] leading-[26px] tracking-[0.4px] text-[#222222] font-[BrownLight] opacity-100">
          Below listed are your itineraries, have a look to the timings and the
          location. We wish you to enjoy the activities and the weather!
        </p>

        <div className="relative ">
          <DashBoardMain
            data={dataDashBoardCard1}
            itemsPerView={itemsPerView}
            currentIndex={currentIndex}
            renderItem={(list) => <DashBoardCard1 key={list.id} list={list} />}
          />
        </div>

        <Slider
          value={1}
          goToPrevImage={goToPrevImage}
          goToNextImage={goToNextImage}
          currentIndex={currentIndex}
          itemsPerView={itemsPerView}
        />

        <div className="mt-[50px]">
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
                <DashBoardCard2
                  key={card2.id}
                  card2={card2}
                  handleClickReview={handleClickReview}
                />
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
          <div className="mt-[20px] flex items-center gap-[15px]">
            {dataDashBoardCard3.map((card3) => (
              <DashBoardCard3 key={card3.id} card3={card3} />
            ))}
          </div>
        </div>

        {/* card4 */}

        <div className="mt-[50px]">
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="w-[600px] text-left text-[#222222] tracking-[1px] text-[24px]"
          >
            Charlie, here is your master journey with us so far
          </h1>
          <div className="mt-[20px] flex items-center gap-[15px]">
            {dataDashBoardCard4.map((card4) => (
              <DashBoardCard4 key={card4.id} card4={card4} />
            ))}
          </div>
        </div>

        {/* map */}

        <div className="mt-[85px]">
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="text-center text-3xl tracking-[.69px]"
          >
            Find events on map
          </h1>
        </div>


        
      </section>
    </>
  );
}
