import {
  dataDashBoardCard3,
  dataMyFavoritesCard,
} from "../assets/Dummy_Data/data";
import DashBoardCard3 from "../Components/DashboardCards/DashBoardCard3";
import MyFavoritesCard from "../Components/MyFavorites/MyFavoritesCard";
import Slider from "../Components/Slider/Slider";
import { useState } from "react";
import userData from "../assets/Dummy_Data/userData";
import fullCardDetails from "../assets/Dummy_Data/fullCardDetails";

export default function MyFavrouites() {
  const [currentIndexCard3, setCurrentIndexCard3] = useState(0);

  const itemsPerViewCard3 = 1.5;

  const favouriteCards = userData[0].favoriteEventCards.flatMap(eventId =>
    fullCardDetails.filter(onecardData => onecardData.id === eventId)
  );

  const goToPrevImageCard3 = () => {
    if (currentIndexCard3 > 0) {
      setCurrentIndexCard3(currentIndexCard3 - 1);
    }
  };

  const goToNextImageCard3 = () => {
    if (currentIndexCard3 <= dataMyFavoritesCard.length - itemsPerViewCard3) {
      setCurrentIndexCard3(currentIndexCard3 + 1);
    }
  };

  return (
    <>
      <section className="mt-[29px]">
        <h2
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="w-[375px] h-[52px] text-left text-[25px] leading-[44px] tracking-[1.16px] text-[#222222]"
        >
          Good morning Charlie!
        </h2>

        <p
          style={{ fontFamily: "BrownLight, sans-serif" }}
          className="text-left text-[18px] font-medium opacity-80 text-[#000000]"
        >
          You have short listed 10 events to join later.
        </p>

        <div className="mt-[36px]">
          <div className="mt-[20px] flex items-center gap-[15px]">
            {dataDashBoardCard3.map((card3) => (
              <DashBoardCard3 key={card3.id} card3={card3} fav={1} />
            ))}
          </div>
          <div className="mt-[20px] flex items-center gap-[15px]">
            {dataDashBoardCard3.map((card3) => (
              <DashBoardCard3 key={card3.id} card3={card3} fav={1} />
            ))}
          </div>
        </div>

        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="mt-[45px] text-left text-[26px] leading-[44px] tracking-[1px] text-[#222222] opacity-100"
        >
          Charlie, we have find some recommendation for you
        </h1>

        <div className="relative">
          <div
            style={{
              transform: `translateX(-${
                currentIndexCard3 * (100 / itemsPerViewCard3)
              }%)`,
            }}
            className="mt-[30px] flex items-center gap-[20px] transition-transform duration-300 ease-in-out"
          >
            {dataMyFavoritesCard.map((favCard) => (
              <MyFavoritesCard key={favCard.id} favCard={favCard} />
            ))}
          </div>
        </div>

        <Slider
          value={3}
          goToPrevImageCard3={goToPrevImageCard3}
          goToNextImageCard3={goToNextImageCard3}
          currentIndexCard3={currentIndexCard3}
          itemsPerViewCard3={itemsPerViewCard3}
        />

        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="mt-[55px] text-left font-normal text-[30px]  tracking-[1.19px] text-[#222222] opacity-100"
        >
          Top 5 activities on this island today
        </h1>

        <div className="mt-[20px]">
          <div className="mt-[20px] flex items-center gap-[15px]">
            {dataDashBoardCard3.map((card3) => (
              <DashBoardCard3 key={card3.id} card3={card3} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
