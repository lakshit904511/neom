import React, { useState } from "react";
import golfImage from "../Components/assets/img/golf.jpg";
import surfingImage from "../Components/assets/img/surfing.jpg";
import islandImage from "../Components/assets/img/island.jpg";
import HomePageCard1 from "./HomePageCard1";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import HomePageCard2 from "./HomePageCard2";

const lists = [
  {
    id: 1,
    title: "Round of Golf",
    img: golfImage,
  },
  {
    id: 2,
    title: "Surfing at leisure",
    img: surfingImage,
  },
  {
    id: 3,
    title: "Island Holiday",
    img: islandImage,
  },
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 2;

  const goToPrevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNextImage = () => {
    if (currentIndex < lists.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="mt-[29px]">
      <h2 className="w-[375px] h-[52px] text-left text-[25px] leading-[44px] tracking-[1.16px] text-[#222222] font-[IvyMode]">
        Good morning Charlie!
      </h2>

      <p className="w-[602px] h-[46px] text-left text-[18px] leading-[26px] tracking-[0.4px] text-[#222222] font-[BrownLight] opacity-100">
        Below listed are your itineraries, have a look to the timings and the
        location. We wish you to enjoy the activities and the weather!
      </p>

      <div className="relative overflow-hidden">
        <div
          className="flex gap-[21px] transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {lists.map((list) => (
            <HomePageCard1 key={list.id} list={list} />
          ))}
        </div>
      </div>

      <div className="w-[126px] h-[46px] mt-[15px] flex items-center gap-[15px]">
        <IoIosArrowRoundBack
          className={
            currentIndex === 0
              ? "mx-2 my-2 rounded-[100px] border-1 text-[#a3a1a1] border-[#a3a1a1] text-3xl"
              : "mx-2 my-2 rounded-[100px] border-1 border-[#222222] text-3xl text-[#222222]"
          }
          onClick={goToPrevImage}
          disabled={currentIndex === 0}
        />

        <IoIosArrowRoundForward
          className={
            currentIndex < lists.length - itemsPerView
              ? "mx-2 my-2 rounded-[100px] border-1 border-[#222222] text-3xl text-[#222222]"
              : "mx-2 my-2 rounded-[100px] border-1 text-[#a3a1a1] border-[#a3a1a1] text-3xl"
          }
          onClick={goToNextImage}
          disabled={currentIndex >= lists.length - itemsPerView}
        />
      </div>

      <div className="mt-[32px]">
        <h1 className="w-[600px] text-left text-[26px]  tracking-[1.19px] text-[#222222] font-[IvyMode]">Charlie, hope we understand you better</h1>
        <div className="relative overflow-hidden">
        <div
          className="flex gap-[21px] transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {lists.map((list) => (
            <HomePageCard2 key={list.id} list={list} />
          ))}
        </div>
      </div>

      <div className="w-[126px] h-[46px] mt-[15px] flex items-center gap-[15px]">
        <IoIosArrowRoundBack
          className={
            currentIndex === 0
              ? "mx-2 my-2 rounded-[100px] border-1 text-[#a3a1a1] border-[#a3a1a1] text-3xl"
              : "mx-2 my-2 rounded-[100px] border-1 border-[#222222] text-3xl text-[#222222]"
          }
          onClick={goToPrevImage}
          disabled={currentIndex === 0}
        />

        <IoIosArrowRoundForward
          className={
            currentIndex < lists.length - itemsPerView
              ? "mx-2 my-2 rounded-[100px] border-1 border-[#222222] text-3xl text-[#222222]"
              : "mx-2 my-2 rounded-[100px] border-1 text-[#a3a1a1] border-[#a3a1a1] text-3xl"
          }
          onClick={goToNextImage}
          disabled={currentIndex >= lists.length - itemsPerView}
        />
      </div>

      </div>
    </section>
  );
}
