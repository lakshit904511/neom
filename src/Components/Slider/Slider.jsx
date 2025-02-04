import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { dataDashBoardCard1 } from "../../assets/Dummy_Data/data";
import { dataDashBoardCard2 } from "../../assets/Dummy_Data/data";

export default function Slider({value,goToPrevImage,goToNextImage,goToNextImageCard2,goToPrevImageCard2,currentIndex,currentIndexCard2,itemsPerView,itemsPerViewCard2}) {

  

  if(value===1) return (
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
          currentIndex < dataDashBoardCard1.length - itemsPerView
            ? "mx-2 my-2 rounded-[100px] border-1 border-[#222222] text-3xl text-[#222222]"
            : "mx-2 my-2 rounded-[100px] border-1 text-[#a3a1a1] border-[#a3a1a1] text-3xl"
        }
        onClick={goToNextImage}
        disabled={currentIndex >= dataDashBoardCard1.length - itemsPerView}
      />
    </div>
  );
  if(value===2)return(
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
              currentIndexCard2 < dataDashBoardCard2.length - itemsPerViewCard2
                ? "mx-2 my-2 rounded-[100px] border-1 border-[#222222] text-3xl text-[#222222]"
                : "mx-2 my-2 rounded-[100px] border-1 text-[#a3a1a1] border-[#a3a1a1] text-3xl"
            }
            onClick={goToNextImageCard2}
            disabled={
              currentIndexCard2 >= dataDashBoardCard2.length - itemsPerViewCard2
            }
          />
        </div>
  )
}

