import social from "../assets/img/socializing.png";
import { FiEdit3 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import serverData from "../assets/Dummy_Data/serverData";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function ProfilePage() {
  const navigate1 = useNavigate();

  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <div className=" relative  mt-[30px] w-[53vw] h-[850px] bg-[#FFFFFF] border border-[#DDDDDD] ">
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="mt-[30px] ml-[55px] text-left text-[24px] leading-[42px] tracking-[1.19px] text-[#222222] opacity-100 "
          >
            Edit Charlie's profile
          </h1>

          <div className="absolute top-[100px] left-[55px] w-[110px] rounded-[8px] overflow-hidden">
            <img
              className="w-[110px] h-[110px] object-cover"
              src={social}
              alt="Social"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            <button className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity">
              <FiEdit3 className="text-[#ffffff] w-[30px] h-[40px] opacity-80" />
            </button>
          </div>

          <div className="absolute top-[90px] left-[190px]">
            <form className="space-y-4">
              <label
                style={{ fontFamily: "Brown, sans-serif" }}
                className="w-[194px] text-center text-[10px] leading-[24px] tracking-wide text-[#222222] opacity-100"
              >
                What should we call you?
              </label>
              <br />
              <input
                type="text"
                className=" outline-gray-300 w-[320px] h-[40px] border border-[#DDDDDD] rounded-[4px] placeholder: pl-2 text-[12px]"
              />
              <br />

              <label
                style={{ fontFamily: "Brown, sans-serif" }}
                className="w-[194px] text-center text-[10px] leading-[24px] tracking-wide text-[#222222] opacity-100"
              >
                What's your email address?
              </label>
              <br />
              <input
                placeholder="tyagiparlakshit2k03@gmail.com"
                type="text"
                className=" outline-gray-300 w-[320px] h-[40px] border border-[#DDDDDD] rounded-[4px] placeholder: pl-2 text-[12px]"
              />
              <br />

              <label
                style={{ fontFamily: "Brown, sans-serif" }}
                className="w-[194px] text-center text-[10px] leading-[24px] tracking-wide text-[#222222] opacity-100"
              >
                On which number can we contact you?
              </label>
              <br />
              <input
                style={{ fontFamily: "BrownLight, sans-serif" }}
                type="number"
                placeholder="9045111609"
                className=" outline-gray-300 w-[320px] h-[40px] border border-[#DDDDDD] rounded-[4px] placeholder: pl-2 text-[12px]"
              />
              <br />

              <label
                style={{ fontFamily: "Brown, sans-serif" }}
                className="w-[194px] text-center text-[10px] leading-[24px] tracking-wide text-[#222222] opacity-100"
              >
                When can we wish a happy birthday?
              </label>
              <br />
              <input
                placeholder="11/03/2003"
                type="date"
                className=" outline-gray-300 w-[320px] h-[40px] border border-[#DDDDDD] rounded-[4px] placeholder: pl-2 text-[12px]"
              />
              <br />

              <div className="mt-[20px] grid grid-cols-5 w-[400px] gap-3 ">
                {serverData[0].formData.map((data1) => (
                  <div className="relative w-[93px]">
                    <img
                      className="w-[73px] h-[100px] object-cover rounded-[4px]"
                      src={data1.image}
                      alt="Social"
                    />

                    <p className="absolute bottom-2 left-3 text-center text-[10px] leading-[16px] tracking-[0.29px] text-[#FFFFFF] opacity-100 font-medium w-[60px]">
                      {data1.name}
                    </p>
                  </div>
                ))}
              </div>

              <label
                style={{ fontFamily: "Brown, sans-serif" }}
                className="w-[194px] text-center text-[10px] leading-[24px] tracking-wide text-[#222222] opacity-100"
              >
                Please let us know if you have some interests{" "}
              </label>
              <br />
              <input
                placeholder="Add multiple interests comma ( , ) separated"
                type="text"
                className=" outline-gray-300 w-[320px] h-[40px] border border-[#DDDDDD] rounded-[4px] placeholder: pl-2 text-[12px]"
              />
              <br />

              <div className="flex gap-5 mt-[10px]">
                <button
                  onClick={() => {
                    navigate1("/");
                  }}
                  style={{ fontFamily: "BrownLight, sans-serif" }}
                  className="bg-[#FF385C] rounded-[4px] opacity-100 px-8 py-2 text-left text-[12px] leading-[21px] tracking-[0.04px] text-[#FFFFFF] "
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    navigate1("/dashboard");
                  }}
                  style={{ fontFamily: "BrownLight, sans-serif" }}
                  className="bg-[#ffffff] border rounded-[4px] opacity-100 px-8 py-2 text-left text-[12px] leading-[21px] tracking-[0.04px] text-[##222222] "
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
