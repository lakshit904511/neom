import { useLocation } from "react-router-dom";
import CommonPage from "../Components/CommonPage/CommonPage";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useSelector } from "react-redux";

export default function DetailedPage() {


  const userDetails=useSelector((store)=>store.user);
  console.log(userDetails);

  const {authorized,fullName}=userDetails;


  const data=useLocation();
  let detailedData;
  let detailedText;
  if(data.state!==null){
    detailedData=data.state.val;
    detailedText=data.state.text;
  }else{
    detailedData=null;
    detailedText=null;
  }
  


  return (
    <>
    <Header />
    <section className="mt-[20px]">
      <div className="flex items-center justify-between pl-[28px] pr-[15px] py-[20px] w-full border border-[#222222] rounded-[12px]">
        <div className="flex w-[775px] flex-col justify-between">
          <h1
            style={{ fontFamily: "IvyMode, sans-serif" }}
            className="text-left font-normal text-[26px]  tracking-[1.19px] text-[#222222] opacity-100"
          >
            Hey {authorized===true?fullName:"Charlie"}
          </h1>
          <h1 style={{ fontFamily: "IvyMode, sans-serif" }} className="mt-[5px] text-left tracking-[1px] font-normal text-[16px]  text-[#222222] opacity-100">
            We are sure that you have enjoyed this event a lot. Would you like
            to share your feedback with us. It helps us to improve and serve you
            better.
          </h1>
        </div>
        <button
          style={{ fontFamily: "BrownLight, sans-serif" }}
          className=" text-[#ffffff] text-[12px] rounded-[4px]  px-[30px] py-3 bg-[#222222] flex items-center justify-center text-center"
        >
          Add a review
        </button>
      </div>
      
      <CommonPage detailedData={detailedData} detailedText={detailedText} />
      
    </section>
    <Footer />
    </>
  );
}
