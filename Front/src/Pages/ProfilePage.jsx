import social from "../assets/img/socializing.png";
import { FiEdit3 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { BsHandThumbsUp } from "react-icons/bs";

import serverData from "../assets/Dummy_Data/serverData";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useSelector } from "react-redux";
import { formatDobDate } from "../util/DateFormatter";
import store from "../../Store";
import { HandleProfile, interestedFunction } from "../Features/User/UserSlice";
import { useEffect, useRef, useState } from "react";

export default function ProfilePage() {
  const navigate1 = useNavigate();
  const userName = useRef(null);
  const userEmail = useRef(null);
  const userMobile = useRef(null);
  const notify = () => toast.success("User updated profile section", {  className: "text-[12px] w-[250px]!",});

  const userDetails = useSelector((store) => store.user);
  const { authorized, fullName, birthDate, mobileNo, email, interestArray } = userDetails;
  const dob = formatDobDate(birthDate);
  console.log(dob);
  const [likeArray, setLikeArray] = useState(interestArray);
  const [inputValue, setInputValue] = useState("");

  function handleImage(value) {
    setLikeArray((prevLikeArray) => {
      const updatedArray = prevLikeArray.map((item) =>
        item[0] === value ? [item[0], !item[1]] : item
      );
      const selectedValue = updatedArray.filter((val) => val[1] === true);
      setInputValue(selectedValue.map((select) => select[0]).join(", "));

      return updatedArray;
    });
    store.dispatch(interestedFunction(likeArray));
  }
  useEffect(() => {
    const selectedValue = interestArray.filter((val) => val[1] === true);
    setInputValue(selectedValue.map((select) => select[0]).join(", "));
  }, []);

  function handleChange(e) {
    const userData = e.target.value;
    setInputValue(userData);

    const data = userData
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    setLikeArray((prevLikeArray) => {
      const updateInputArray = prevLikeArray.map((item) =>
        data.includes(item[0]) ? [item[0], true] : [item[0], false]
      );
      return updateInputArray;
    });
    store.dispatch(interestedFunction(likeArray));
  }

  function handleSaveProfile(e) {
    e.preventDefault();
    const updatedName = userName.current.value;
    const updatedEmail = userEmail.current.value;
    const updatedMobile = userMobile.current.value;
    console.log(updatedName, updatedMobile, updatedEmail);
    store.dispatch(HandleProfile(updatedName, updatedEmail, updatedMobile));
    notify();
  }


  return (
    <>
      <Header />
      <div className="flex items-center justify-center">
        <div className=" relative  mt-[30px] w-[53vw] h-[850px] bg-[#FFFFFF] border border-[#DDDDDD] ">
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="mt-[30px] ml-[55px] text-left text-[24px] leading-[42px] tracking-[1.19px] text-[#222222] opacity-100 "
          >
            Edit {authorized === true ? fullName : "Charlie"} profile
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
          <ToastContainer />
          <div className="absolute top-[90px] left-[190px]">
            <form onSubmit={handleSaveProfile} className="space-y-4">
              <label
                style={{ fontFamily: "Brown, sans-serif" }}
                className="w-[194px] text-center text-[10px] leading-[24px] tracking-wide text-[#222222] opacity-100"
              >
                What should we call you?
              </label>
              <br />
              <input
                defaultValue={fullName}
                ref={userName}
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
                ref={userEmail}
                defaultValue={email}
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
                ref={userMobile}
                style={{ fontFamily: "BrownLight, sans-serif" }}
                type="text"
                defaultValue={mobileNo}
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
                disabled
                value={dob}
                type="text"
                className=" outline-gray-300 w-[320px] h-[40px] border border-[#DDDDDD] rounded-[4px] placeholder: pl-2 text-[12px]"
              />
              <br />

              <div className="mt-[20px] grid grid-cols-5 w-[400px] gap-3">
                {serverData[0].formData.map((data1) => {
                  const isLiked = likeArray.find(
                    (item) => item[0] === data1.name
                  )?.[1];

                  return (
                    <div
                      key={data1.name}
                      onClick={() => handleImage(data1.name)}
                      className="relative w-[73px] cursor-pointer"
                    >
                      <img
                        className="relative w-[73px] h-[100px] object-cover rounded-[4px] cursor-pointer"
                        src={data1.image}
                        alt="Social"
                      />
                      {isLiked && (
                        <>
                          <BsHandThumbsUp
                            size={30}
                            className="absolute z-90 top-7 right-5 text-white text-lg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                        </>
                      )}
                      <p className="absolute bottom-2 left-3 text-center text-[10px] leading-[16px] tracking-[0.29px] text-[#FFFFFF] opacity-100 font-medium w-[60px]">
                        {data1.name}
                      </p>
                    </div>
                  );
                })}
              </div>

              <label
                style={{ fontFamily: "Brown, sans-serif" }}
                className="w-[194px] text-center text-[10px] leading-[24px] tracking-wide text-[#222222] opacity-100"
              >
                Please let us know if you have some interests{" "}
              </label>
              <br />
              <input
                onChange={handleChange}
                value={inputValue}
                placeholder="Add multiple interests comma ( , ) separated"
                type="text"
                className="outline-gray-300 w-[320px] h-[40px] border border-[#DDDDDD] rounded-[4px] placeholder:pl-2 text-[12px]"
              />
              <br />

              <div className="flex gap-5 mt-[10px]">
                <button
                  onClick={handleSaveProfile}
                  style={{ fontFamily: "BrownLight, sans-serif" }}
                  className="bg-[#FF385C] rounded-[4px] cursor-pointer opacity-100 px-8 py-2 text-left text-[12px] leading-[21px] tracking-[0.04px] text-[#FFFFFF] "
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    navigate1("/dashboard");
                  }}
                  style={{ fontFamily: "BrownLight, sans-serif" }}
                  className="bg-[#ffffff] border cursor-pointer rounded-[4px] opacity-100 px-8 py-2 text-left text-[12px] leading-[21px] tracking-[0.04px] text-[##222222] "
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
