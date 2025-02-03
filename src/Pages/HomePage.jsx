import React, { useState } from "react";
import golfImage from "../Components/assets/img/golf.jpg";
import surfingImage from "../Components/assets/img/surfing.jpg";
import islandImage from "../Components/assets/img/island.jpg";
import HomePageCard1 from "./HomePageCard1";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import HomePageCard2 from "./HomePageCard2";

import mountain from "../Components/assets/img/mountain.jpg";
import yoga from "../Components/assets/img/yoga.jpg";
import surfing from "../Components/assets/img/surfing.jpg";
import holiday from '../Components/assets/img/holiday_0.png'
import disappoint from "../Components/assets/img/disappointed.svg";
import joy from "../Components/assets/img/joy.svg";
import over from "../Components/assets/img/overwhelmed.svg";
import HomePageCard3 from "./HomePageCard3";

const dataHomePageCard3=[
  {
    id:1,
    title:"Invigorating & Uplifting",
    date:"Nov 10-29",
    image:golfImage,
    icon:joy,
    name:"Round of Golf",
    time:"10:30 AM - 7:30 PM",
  },
  {
    id:2,
    title:"Active & Energizing",
    date:"Nov 10-29",
    image:surfing,
    icon:over,
    name:"Surfing",
    time:"10:30 AM - 7:30 PM",
  },
  {
    id:3,
    title:"Vibrant & Social",
    date:"Nov 10-29",
    image:holiday,
    icon:over,
    name:"Jazz Concert",
    time:"10:30 AM - 7:30 PM",
  },
  {
    id:4,
    title:"Glamorous & Grand",
    date:"Nov 10-29",
    image:islandImage,
    icon:joy,
    name:"Sweet Wonderland",
    time:"10:30 AM - 7:30 PM",
  },
  {
    id:5,
    title:"Active & Energizing",
    date:"Nov 10-29",
    image:surfing,
    icon:joy,
    name:"Kite Surfing",
    time:"10:30 AM - 7:30 PM",
  },
]



const dataHomePageCard2 = [
  {
    id: 1,
    title: "Indulge in the Finest Epicurean Cuisines",
    image: mountain,
    emoji: disappoint,
    textBtn:"Yes, I accept",
    textBtn2:"No, Thanks",
    description:
      "Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as a goodwill gesture. Would you like to accept our request?",
  },
  {
    id: 2,
    title: "Surfing at leisure",
    image: surfing,
    emoji: joy,
    textBtn:"Yes, I would Share",
    textBtn2:"Remind me later",
    description:
      "Hello Susan, we noticed that you have amazing surfing skills and we hope that you had a great time here while surfing. How was your experience with us! Would you mind sharing with?",
  },
  {
    id: 3,
    title: "Dive into Exciting Island Holiday Experiences",
    image: yoga,
    emoji: joy,
    textBtn:"Yes, I would Share",
    textBtn2:"Remind me later",
    description:
      "Hello Susan, we noticed that you have amazing surfing skills and you had a great time while surfing. Please share your experience with us! Would you mind sharing with?",
  },
];

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

export default function HomePage({handleClickReview}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexCard2, setCurrentIndexCard2] = useState(0);

  const itemsPerView = 2;
  const itemsPerViewCard2 = 2;

  const goToPrevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToPrevImageCard2 = () => {
    if (currentIndexCard2 > 0) {
      setCurrentIndexCard2(currentIndexCard2 - 1);
    }
  };

  const goToNextImage = () => {
    if (currentIndex < lists.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToNextImageCard2 = () => {
    if (currentIndexCard2 < dataHomePageCard2.length - itemsPerViewCard2) {
      setCurrentIndexCard2(currentIndexCard2 + 1);
    }
  };

  return (
    <section className="mt-[29px] ">
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

      <div className="mt-[50px]">
        <h2 className="w-[500px] text-left text-[26px] leading-[28px] tracking-[1.19px] text-[#222222] font-[IvyMode]">
          Charlie, hope we understand you better
        </h2>

        <div className="relative overflow-hidden">
          <div
            style={{
              transform: `translateX(-${
                currentIndexCard2 * (100 / itemsPerViewCard2)
              }%)`,
            }}
            className="flex items-center mt-[15px] gap-[23px] transition-transform duration-300 ease-in-out"
          >
            {dataHomePageCard2.map((card2) => (
              <HomePageCard2 key={card2.id} card2={card2} handleClickReview={handleClickReview} />
            ))}
          </div>
        </div>

        <div className="w-[126px] h-[46px] mt-[10px] flex items-center gap-[15px]">
          <IoIosArrowRoundBack
            className={
              currentIndexCard2 === 0
                ? "mx-2 my-2 rounded-[100px] border-1 text-[#a3a1a1] border-[#a3a1a1] text-3xl"
                : "mx-2 my-2 rounded-[100px] border-1 border-[#222222] text-3xl text-[#222222]"
            }
            onClick={goToPrevImageCard2}
            disabled={currentIndexCard2 === 0}
          />

          <IoIosArrowRoundForward
            className={
              currentIndexCard2 < dataHomePageCard2.length - itemsPerViewCard2
                ? "mx-2 my-2 rounded-[100px] border-1 border-[#222222] text-3xl text-[#222222]"
                : "mx-2 my-2 rounded-[100px] border-1 text-[#a3a1a1] border-[#a3a1a1] text-3xl"
            }
            onClick={goToNextImageCard2}
            disabled={
              currentIndexCard2 >= dataHomePageCard2.length - itemsPerViewCard2
            }
          />
        </div>
      </div>

      <div className="mt-[60px]">
         <h1 className="w-[550px] text-left text-[#222222] tracking-[1px] text-[26px] font-[IvyMode] ">Today's recommendations for you, Charlie!</h1>
         <div className="mt-[20px] flex items-center gap-[15px]">
           {dataHomePageCard3.map((card3)=>(
            <HomePageCard3 key={card3.id} card3={card3} />
           ))}
         </div>
      </div>
    </section>
  );
}
