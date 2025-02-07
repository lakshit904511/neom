
import FeedBackCard from "../Components/FeedBackCard.jsx/FeedBackCard";
import vibe from "../assets/img/vibe-o-meter.svg";
import over from "../assets/img/overwhelmed.svg";
import { dataFeedBack } from "../assets/Dummy_Data/data";


export default function FeedBackPage() {
  
  return (
    <>
      <div className="w-[1370px] h-[320px]   flex flex-row-reverse justify-between bg-[linear-gradient(116deg,#fee8a6_0%,#f1d9ff_86%)] items-center px-[110px] ml-[-110px] bg-white shadow-md shadow-black/5 opacity-100 backdrop-blur-[30px] p-4 rounded-lg">
        <img className="w-[400px] h-[250px] " src={vibe} />
        <div className="flex h-[250px] flex-col gap-[8px]">
          <img className="w-[60px] h-[60px]" src={over} />
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="font-normal text-left text-[28px] leading-[44px] tracking-[1.19px] text-[#222222] "
          >
            Overwhelmed experience
          </h1>
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="font-normal text-left text-[25px] leading-[44px] tracking-[1.19px] text-[#222222] "
          >
            Your Vibe-O-Meter reading exits us too
          </h1>
          <p
            style={{ fontFamily: "BrownLight, sans-serif" }}
            className="font-normal text-left w-[500px]  text-[20px] text-[#222222] "
          >
            We are happy too because we successfully keep you happy during this
            visit to Sindalah City.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mr-[100px] ">
        <div className="mt-[40px]  flex flex-col items-center justify-start">
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="text-left text-[28px] leading-[35px] font-medium tracking-[1.19px] text-[#161616] opacity-100"
          >
            Hi Charlie,<br></br> here are the glimpse of your feedback shared
            with us.
          </h1>

          <div className="mt-[45px] flex flex-col gap-[20px]">
           { dataFeedBack.map((feed)=>(<FeedBackCard key={feed.id} feed={feed}/>))}
          </div>
        </div>
      </div>
    </>
  );
}
