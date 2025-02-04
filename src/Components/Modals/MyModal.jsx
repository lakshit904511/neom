import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import HomePage from "../../Pages/DashBoard";
import { useNavigate } from "react-router-dom";

export default function MyModal() {
  const navigate=useNavigate();
  function closeModal(){
    navigate("/");
  }
  return (
    <>
    <HomePage />
    <div
      onClick={closeModal}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-black/50 to-black/20 "
    >
      <div className="w-[550px] h-[527px] bg-white p-[25px] rounded-lg shadow-lg relative">
        <IoIosCloseCircleOutline onClick={closeModal} className="absolute top-[10px] right-[10px]" />
        <h2
          className=" text-left text-[20px] leading-[16px] tracking-[0.19px] font-[IvyMode] text-[#222222]
"
        >
          Add a review
        </h2>
        <p
          className="mt-[15px] text-left text-[12px] leading-[18px] tracking-[0.45px] font-[BrownLight] text-[#222222] opacity-100
"
        >
          Hi Charlie, If you're here on this page, we bet you enjoy this event
          fully. Would you mind to share your valuable feedback review with us?
        </p>

        <div className="mt-[20px] grid grid-cols-2 gap-[15px]">
          <div className="flex flex-col items-start justify-start">
            <span
              className="text-left text-[12px] leading-[18px] tracking-[0.25px] font-[Brown] text-[#222222] 
"
            >
              Quality of Event
            </span>
            <div className="flex justify-start gap-[5px] items-center mt-[10px]">
              {[...Array(5)].map((__, i) => (
                <FaRegStar key={i} />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <span
              className="text-left text-[12px] leading-[18px] tracking-[0.25px] font-[Brown] text-[#222222]
"
            >
              Facilities of Event
            </span>
            <div className="flex justify-start gap-[5px] items-center mt-[10px]">
              {[...Array(5)].map((__, i) => (
                <FaRegStar key={i} />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-start">
            <span
              className="text-left text-[12px] leading-[18px] tracking-[0.25px] font-[Brown] text-[#222222]
"
            >
              Staff Politeness
            </span>
            <div className="flex justify-start gap-[5px] items-center mt-[10px]">
              {[...Array(5)].map((__, i) => (
                <FaRegStar key={i} />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-start">
            <span
              className="text-left text-[12px] leading-[18px] tracking-[0.25px] font-[Brown] text-[#222222]
"
            >
              Operator of Event
            </span>
            <div className="flex justify-start gap-[5px] items-center mt-[10px]">
              {[...Array(5)].map((__, i) => (
                <FaRegStar key={i} />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-start">
            <span
              className="text-left text-[12px] leading-[18px] tracking-[0.25px] font-[Brown] text-[#222222]
"
            >
              Services at Event
            </span>
            <div className="flex justify-start gap-[5px] items-center mt-[10px] ">
              {[...Array(5)].map((__, i) => (
                <FaRegStar key={i} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[20px]">
          <textarea
            placeholder="Share your feedback and suggestions about this event..."
            className=" placeholder:pt-[10px] pl-[10px] text-left placeholder:text-[#000000] text-[14px] leading-6 tracking-[0.35px] opacity-50 w-full h-[150px] outline-none bg-white border border-gray-300 rounded-lg "
          />
        </div>
        <button
          // onClick={handleViboMeter}
          className="mt-4 text-[12px] px-8 py-2 bg-[#222222] text-white rounded-[6px]"
        >
          Submit
        </button>
      </div>
    </div>
    </>
  );
}
