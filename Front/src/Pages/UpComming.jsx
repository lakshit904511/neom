import { dataFilters } from "../assets/Dummy_Data/data";
import DashBoardCard3 from "../Components/DashboardCards/DashBoardCard3";
import UpcommingButtons from "../Components/Upcomming/UpcommingButtons";
import UpcommingButton2 from "../Components/Upcomming/UpCommingButton2";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useSelector } from "react-redux";
import store from "../../Store";
import { getFilterEvent } from "../Features/User/UserSlice";
import { useState } from "react";

export default function UpComming() {

  const [showcard,setShowCards]=useState(15);
  // cosnt [load,setLoad]=useState()

  const userDetails = useSelector((store) => store.user);
  console.log(userDetails);

  const { authorized, fullName, totalCards,filterCheck } = userDetails;

  function handleFilter(value) {
    store.dispatch(getFilterEvent(value));
  }

  const totalCardsNumber=totalCards.length;
  function handleLoad(){
     const itemPerClick=3;
     if(showcard!==totalCardsNumber)
     {

      setShowCards((prev)=>prev+itemPerClick);
     }
     else{
      setShowCards(15);
     }
  }


  return (
    <>
      <Header />
      <h1
        style={{ fontFamily: "IvyMode, sans-serif" }}
        className="mt-[30px] text-left font-normal text-[28px]  tracking-[1.19px] text-[#222222] opacity-100"
      >
        Hey {authorized === true ? fullName : "Charlie"},
      </h1>
      <h1
        style={{ fontFamily: "IvyMode, sans-serif" }}
        className="mt-[3px] text-left tracking-[1.10px] font-normal text-[16px]  text-[#222222] opacity-100"
      >
        Let's find something exiting for you.
      </h1>
      <div className="mt-[20px] flex flex-col items-start w-full">
        <div className="flex justify-center items-start gap-[30px]">
          <UpcommingButton2 />
          <UpcommingButtons />
        </div>

        <div className="flex mt-[30px] flex-col gap-[10px]">
          <h1
            style={{ fontFamily: "BrownLight, sans-serif" }}
            className="text-left font-normal text-[13px] leading-[24px] tracking-[0px] text-[#222222] opacity-100"
          >
            You can always filter out the events by category wise.
          </h1>
          <div className="flex  gap-[10px]">
            {dataFilters.map((filt1) => {
              return (
                <div
                  style={{ fontFamily: "BrownLight, sans-serif" }}
                  className={`group border cursor-pointer flex justify-center items-center border-[#222222] bg-[#F9F7F2] rounded-[24px] opacity-80
                ${filterCheck===filt1?"bg-black text-white transition-all duration-300":null}`}
                >
                  <button
                    onClick={() => handleFilter(filt1)}
                    className={`px-[10px] py-[2px] tracking-normal cursor-pointer leading-[28px] text-center font-normal text-[12px] text-[#222222]  ${filterCheck===filt1?"text-white opacity-80":null}`}
                  >
                    {filt1}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-[26px] flex flex-col justify-center">
        {
          <div className="mt-[20px] grid grid-cols-5 gap-[15px]">
            {totalCards.slice(0,showcard).map((card3) => (
              <DashBoardCard3 key={card3.id} card3={card3} up={1} />
            ))}
          </div>
        }
      
        
          <button
            onClick={handleLoad}
            style={{ fontFamily: "BrownLight, sans-serif" }}
            className="mx-auto text-[#ffffff] rounded-[4px] text-[14px]  mt-[40px] px-[24px] py-[8px] bg-[#222222] flex items-center justify-center text-center"
          >
            Load More
          </button>
     
      </div>
      <Footer />
    </>
  );
}
