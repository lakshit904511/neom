import { MdOutlineStar } from "react-icons/md";
const stars = [1, 2, 3, 4, 5];
import { BiCategory } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import golf from "../../assets/img/golf.jpg";
import joy from "../../assets/img/joy.svg";
import CommonPageCard from "./CommonPageCard";
import Slider from "../Slider/Slider";
import DashBoardCard3 from "../DashboardCards/DashBoardCard3";
import { dataDashBoardCard3 } from "../../assets/Dummy_Data/data";
import { useLocation } from "react-router-dom";

export default function CommonPage() {
  const value = useLocation();
  var check;
  if(value.state===null){
    check="";
  }else{
    check = value.state.text
  }
  

  const total = 2;
  return (
    <div className="mt-[30px]">
      <h1
        style={{ fontFamily: "IvyMode, sans-serif" }}
        className="text-left font-normal text-[24px]  tracking-[1.19px] text-[#222222] opacity-100"
      >
        Round of Golf
      </h1>

      <div className="flex mt-[8px] items-center gap-[10px]">
        <div className="flex items-center justify-center">
          {stars.map((star, index) => (
            <MdOutlineStar
              key={index}
              className="text-[#FF385C] w-[13px] h-[13px]"
            />
          ))}
        </div>
        <span
          style={{ fontFamily: "Brown, sans-serif" }}
          className=" text-left text-[10px] tracking-[0.31px] text-[#222222]"
        >
          5.0 . <span className="border-b">23 reviews</span>
        </span>
        <span
          style={{ fontFamily: "Brown, sans-serif" }}
          className=" text-left text-[10px] tracking-[0.31px] text-[#222222]"
        >
          . Sindalah City, Dubai
        </span>
      </div>

      <div className="flex justify-between  w-full gap-2 mt-[25px] ">
        <div className="grid grid-cols-2  w-1/2 gap-2 ">
          <img className="h-[220px] object-cover rounded-tl-md" src={golf} />
          <img className="h-[220px] object-cover" src={golf} />
          <img className="h-[220px] object-cover rounded-bl-md" src={golf} />
          <img className="h-[220px] object-cover " src={golf} />
        </div>
        <div className="flex w-1/2 relative ">
          <img className="h-[450px] object-cover rounded-r-md" src={golf} />
          <button
            style={{ fontFamily: "Brown, sans-serif" }}
            className="absolute bottom-3 right-3 font-medium text-[#222222] rounded-[4px] text-[12px] px-[18px] py-[10px] bg-[#ffffff] flex items-center justify-center text-center"
          >
            Show all
          </button>
          <span
            style={{ fontFamily: "Brown, sans-serif" }}
            className="absolute top-[-20px] right-0  text-left text-[10px] tracking-[0.31px] text-[#222222]"
          >
            Completed
          </span>
        </div>
      </div>

      <div className="px-[80px] flex justify-between mt-[35px] ">
        <div>
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="text-left font-normal text-[26px]  tracking-[1.19px] text-[#222222] opacity-100"
          >
            About the event
          </h1>

          <div className="flex flex-col items-start justify-between w-full mt-[30px]">
            <div className=" flex flex-col border-b w-[650px] border-gray-200">
              <div className="flex gap-[15px] w-[490px] h-[60px] items-start">
                <BiCategory className="w-[23px] h-[25px] opacity-60" />
                <div className="flex flex-col justify-between items-start">
                  <p
                    style={{ fontFamily: "Brown, sans-serif" }}
                    className="text-left font-medium tracking-[.50px]  text-[14px] text-[#222222] opacity-90 "
                  >
                    Golf
                  </p>
                  <p
                    style={{ fontFamily: "BrownLight, sans-serif" }}
                    className="text-left opacity-90  tracking-[.30px]  text-[14px] text-[#222222]  "
                  >
                    This is one of the many events comes under the Golf
                    category.
                  </p>
                </div>
              </div>

              <div className="flex gap-[15px] w-[490px] h-[60px] items-start ">
                <CiLocationOn className="w-[23px] text-black h-[25px] opacity-60" />
                <div className="flex flex-col justify-between items-start">
                  <p
                    style={{ fontFamily: "Brown, sans-serif" }}
                    className="text-left font-medium tracking-[.50px] opacity-90  text-[14px] text-[#222222] "
                  >
                    Great location
                  </p>
                  <p
                    style={{ fontFamily: "BrownLight, sans-serif" }}
                    className="text-left opacity-90  tracking-[.30px]  text-[14px] text-[#222222]  "
                  >
                    Every guest has given a five star rating to this location.{" "}
                  </p>
                </div>
              </div>

              <div className="flex gap-[15px] w-[490px] h-[60px]   items-start">
                <img src={joy} className="w-[20px] h-[25px]" />
                <div className="flex flex-col justify-between items-start">
                  <p
                    style={{ fontFamily: "Brown, sans-serif" }}
                    className="text-left font-medium  tracking-[.30px] opacity-90  text-[14px] text-[#222222] "
                  >
                    Invigorating & uplifting experience
                  </p>
                  <p
                    style={{ fontFamily: "BrownLight, sans-serif" }}
                    className="text-left opacity-90  tracking-[.50px]  text-[14px] text-[#222222]  "
                  >
                    This event has a rating of 5.0 that make this event
                    overwhelmed.{" "}
                  </p>
                </div>
              </div>
              <p
                style={{ fontFamily: "BrownLight, sans-serif" }}
                className="w-[650px] text-left mt-[20px] leading-5 opacity-90   tracking-[.50px]  text-[12px] text-[#222222]  "
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elit.
              </p>

              <p
                style={{ fontFamily: "BrownLight, sans-serif" }}
                className="w-[650px] border-b leading-5 pb-[25px] border-gray-200 text-left mt-[30px] opacity-90  tracking-[.50px]  text-[12px] text-[#222222]  "
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elit.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`${
            check === "favorite" || check === "remove"
              ? "h-[250px]"
              : "h-[200px]"
          } w-[300px] p-5 flex flex-col  bg-white bg-[0%_0%] bg-no-repeat bg-padding-box shadow-[0px_3px_16px_rgba(0,0,0,0.14)] border border-[#DDDDDD] rounded-[12px] opacity-100`}
        >
          <h1
            style={{ fontFamily: "Brown, sans-serif" }}
            className="text-left opacity-80 font-normal text-[16px]  tracking-[1.19px] text-[#222222]"
          >
            10:30 AM - 7:30 PM
          </h1>
          <div className="mt-1 flex flex-col">
            <div
              style={{ fontFamily: "Brown, sans-serif" }}
              className=" border-b  text-left   opacity-60  tracking-[.50px]  text-[12px] text-[#222222] p-2 flex justify-between border border-gray-300 "
            >
              <p>
                From<br></br>Nov 10, 2022
              </p>
              <p>
                To<br></br>Nov 29, 2022
              </p>
            </div>
            <div
              style={{ fontFamily: "Brown, sans-serif" }}
              className=" border-b  text-left   opacity-60  tracking-[.50px]  text-[12px] text-[#222222] p-2 flex justify-between border border-gray-300 "
            >
              <p>
                Guests<br></br>1 Adults
              </p>
            </div>
            {check === "favorite" || check === "remove" ? (
              <div className="flex flex-col">
                <p
                  style={{ fontFamily: "Brown, sans-serif" }}
                  className="   text-left   opacity-60  tracking-[.50px]  text-[14px] text-[#222222] flex justify-between mt-[8px] "
                >
                  172 seats available
                </p>
                <button
                  style={{ fontFamily: "BrownLight, sans-serif" }}
                  className="w-full text-[#ffffff] rounded-[4px] text-[14px] mt-[10px] px-[24px] py-[8px] bg-[#222222] flex items-center justify-center text-center"
                >
                  Reserve my seat
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className="flex px-[80px] flex-col w-[650px]">
        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="mt-[20px] text-left font-normal text-[24px]  tracking-[1.19px] text-[#222222] opacity-100"
        >
          Operator River Stone
        </h1>
        <div className="flex items-start mt-[10px]  justify-start">
          {stars.map((star, index) => (
            <MdOutlineStar
              key={index}
              className="text-[#FF385C] w-[13px] h-[13px]"
            />
          ))}
          <span
            style={{ fontFamily: "Brown, sans-serif" }}
            className=" text-left text-[10px] ml-[10px] tracking-[0.31px] text-[#222222]"
          >
            4.9
          </span>
        </div>
        <p
          style={{ fontFamily: "BrownLight, sans-serif" }}
          className="w-[650px] text-left mt-[20px] leading-5 opacity-90  tracking-[.50px]  text-[12px] text-[#222222]  "
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elit.
        </p>
      </div>

      <CommonPageCard />
      <Slider value={1} />

      <div className="mt-[35px]">
        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="text-left text-[25px] leading-[44px] tracking-[1.16px] text-[#222222]"
        >
          Some more recommandation for you, Shane!
        </h1>

        <div className="flex flex-col justify-center">
          {Array.from({ length: total }).map((_, i) => (
            <div key={i} className="mt-[20px] flex items-center gap-[15px]">
              {dataDashBoardCard3.map((card3) => (
                <DashBoardCard3 key={card3.id} card3={card3} up={1} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
