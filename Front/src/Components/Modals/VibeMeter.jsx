import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";
import FeedbackSpeedometer from "../Speedometer/feedbackSpeedometer";
import over from "../../assets/img/overwhelmed.svg";
import anger from "../../assets/img/anger.svg";
import appre from "../../assets/img/appreciation.svg";
import bore from "../../assets/img/boredom.svg";
import disapp from "../../assets/img/disappointed.svg";
import { useState } from "react";

const reactions = [
  { value: 10, src: over, alt: "Segment 1" },
  { value: 30, src: appre, alt: "Segment 2" },
  { value: 50, src: bore, alt: "Segment 3" },
  { value: 70, src: disapp, alt: "Segment 4" },
  { value: 90, src: anger, alt: "Segment 5" },
];

export default function VibeMeter({ closeVibeModal, handleVibeSubmit }) {
  const userDetails = useSelector((store) => store.user);
  const { authorized, fullName } = userDetails;

  const [rec, setRec] = useState(0);

  function handleReaction(val) {
    console.log("SVG clicked, setting value:", val);
    setRec(+val);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center  ">
      <div className="w-[550px] h-[580px] bg-white p-[25px] rounded-lg shadow-lg relative">
        <IoIosCloseCircleOutline
          onClick={closeVibeModal}
          className="absolute cursor-pointer top-[10px] right-[10px]"
        />
        <h2
          className=" text-left text-[20px] leading-[16px] tracking-[0.19px] font-[IvyMode] text-[#222222]
"
        >
          Vibe-o-meter
        </h2>
        <p
          className="mt-[15px] text-left text-[12px] leading-[18px] tracking-[0.45px] font-[BrownLight] text-[#222222] opacity-100
  "
        >
          Hi {authorized === true ? fullName : "Charlie"}, we would love know
          the vibes you got from this event. It helps us to improve us and serve
          you best for the next time.
        </p>
        <div className="mt-[30px] flex  flex-col items-center justify-center mr-[60px]">
          <FeedbackSpeedometer rec={rec} />
          <div className="flex z-[100] justify-evenly cursor-pointer items-center gap-5 ml-[30px] mt-[10px]">
            {reactions.map((reaction, index) => (
              <img
                key={index}
                onClick={() => handleReaction(reaction.value)}
                className="cursor-pointer"
                src={reaction.src}
                alt={reaction.alt}
                style={{ width: "30px", height: "30px" }}
              />
            ))}
          </div>
        </div>
        <div className="mt-[20px]">
          <textarea
            placeholder="Share your experience with us..."
            className="outline-gray-700 text-black  placeholder: pl-[10px] text-left placeholder:text-[#000000] text-[14px] leading-6 tracking-[0.35px] opacity-50 w-full h-[150px] outline-none bg-white border border-gray-600 pt-1  rounded-lg "
          />
        </div>
        <button
          onClick={handleVibeSubmit}
          className="mt-4 text-[12px] cursor-pointer px-8 py-2 bg-[#222222] text-white rounded-[6px]"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
