import walk from "../assets/img/walking.png";
import social from "../assets/img/socializing.png";
import { FiEdit3 } from "react-icons/fi";
import { formData } from "../assets/Dummy_Data/data";
import { useNavigate } from "react-router-dom";
export default function ProfilePage() {
    const navigate1=useNavigate();
    const navigate2=useNavigate();

  return (
    <div className="flex items-center justify-center">
      <div className=" relative  mt-[30px] w-[65vw] h-[1050px] bg-[#FFFFFF] border border-[#DDDDDD] ">
        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="mt-[40px] ml-[60px] text-left text-[30px] leading-[42px] tracking-[1.19px] text-[#222222] opacity-100 "
        >
          Edit Charlie's profile
        </h1>

        <div className="absolute top-[120px] left-[60px] w-[160px] rounded-[12px] overflow-hidden">
          <img
            className="w-[160px] h-[160px] object-cover"
            src={social}
            alt="Social"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

          <button className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity">
            <FiEdit3 className="text-[#ffffff] w-[30px] h-[40px] opacity-80" />
          </button>
        </div>

        <div className="absolute top-[100px] left-[265px]">
          <form className="space-y-4">
            <label
              style={{ fontFamily: "Brown, sans-serif" }}
              className="w-[174px] text-center text-[14px] leading-[44px] tracking-[0.31px] text-[#222222] opacity-100 font-[Brown]"
            >
              What should we call you?
            </label>
            <br />
            <input
              type="text"
              className=" outline-gray-300 w-[460px] h-[40px] border border-[#DDDDDD] rounded-[6px]"
            />
            <br />

            <label
              style={{ fontFamily: "Brown, sans-serif" }}
              className=" w-[174px] text-center text-[14px] leading-[44px] tracking-[0.31px] text-[#222222] opacity-100 font-[Brown]"
            >
              What's your email address?
            </label>
            <br />
            <input
              placeholder="tyagiparlakshit2k03@gmail.com"
              type="text"
              className=" outline-gray-300 w-[460px] h-[40px] border border-[#DDDDDD] rounded-[6px] placeholder:text-left text-[14px] pl-[10px] leading-[24px] tracking-[0.4px] text-[#222222] bg-[#f2eeeeae] opacity-100"
            />
            <br />

            <label
              style={{ fontFamily: "Brown, sans-serif" }}
              className=" w-[174px] text-center text-[14px] leading-[44px] tracking-[0.31px] text-[#222222] opacity-100 font-[Brown]"
            >
              On which number can we contact you?
            </label>
            <br />
            <input
              style={{ fontFamily: "BrownLight, sans-serif" }}
              type="number"
              placeholder="9045111609"
              className=" outline-gray-300 w-[460px] h-[40px] border border-[#DDDDDD] rounded-[6px] placeholder:text-left text-[14px] pl-[10px] leading-[24px] tracking-[0.4px] text-[#222222] opacity-100"
            />
            <br />

            <label
              style={{ fontFamily: "Brown, sans-serif" }}
              className=" w-[174px] text-center text-[14px] leading-[44px] tracking-[0.31px] text-[#222222] opacity-100 font-[Brown]"
            >
              When can we wish a happy birthday?
            </label>
            <br />
            <input
              placeholder="11/03/2003"
              type="date"
              className=" outline-gray-300 w-[460px] h-[40px] border border-[#DDDDDD] rounded-[6px] placeholder:text-left text-[14px] bg- pl-[10px] leading-[24px] tracking-[0.4px] text-[#222222] opacity-100"
            />
            <br />

            <div className="mt-[20px] grid grid-cols-5 w-[500px] gap-[20px]">
              {formData.map((data1) => (
                <div className="relative w-[93px]">
                  <img
                    className="w-[93px] h-[130px] object-cover rounded-[4px]"
                    src={data1.image}
                    alt="Social"
                  />

                  <p className="absolute bottom-3 left-3 text-center text-[13px] leading-[16px] tracking-[0.29px] text-[#FFFFFF] opacity-100 font-medium w-[60px]">
                    {data1.name}
                  </p>
                </div>
              ))}
            </div>

            <label
              style={{ fontFamily: "Brown, sans-serif" }}
              className="w-[174px] text-center text-[14px] leading-[44px] tracking-[0.31px] text-[#222222] opacity-100 font-[Brown]"
            >
              Please let us know if you have some interests{" "}
            </label>
            <br />
            <input
              placeholder="Add multiple interests comma ( , ) separated"
              type="text"
              className=" outline-gray-300 w-[460px] h-[40px] border border-[#DDDDDD] rounded-[6px] placeholder:text-left text-[14px] bg- pl-[10px] leading-[24px] tracking-[0.4px] text-[#222222] opacity-100"
            />
            <br />

            <div className="flex gap-10 mt-[40px]">
                <button onClick={()=>{navigate1("/")}} style={{ fontFamily: "BrownLight, sans-serif" }} className="bg-[#FF385C] rounded-[6px] opacity-100 px-10 py-3 text-left text-[14px] leading-[21px] tracking-[0.04px] text-[#FFFFFF] ">Save</button>
                <button onClick={()=>{navigate1("/dashboard")}}  style={{ fontFamily: "BrownLight, sans-serif" }} className="bg-[#ffffff] border rounded-[6px] opacity-100 px-9 py-3 text-left text-[14px] leading-[21px] tracking-[0.04px] text-[##222222] ">Cancel</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
