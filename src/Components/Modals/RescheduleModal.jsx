import { useEffect, useState } from "react";
import { MdNotificationsActive  } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function RescheduleModal({ notificationRef,handleReschedule,handleCancel2 }) {
  const [showModal, setShowModal] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (loc.pathname === "/dashboard") {
        setShowModal(true);
      }
    }, 7000);

    return () => clearInterval(interval);
  }, []);



  const handleCancel = () => {
    setShowModal(false);
  };

  const getModalPosition = () => {
    if (notificationRef.current) {
      const rect = notificationRef.current.getBoundingClientRect();
      return {
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      };
    }
    return { top: 0, left: 0 };
  };

  const modalPosition = getModalPosition();

  return (
    <>
      {showModal && loc.pathname === "/dashboard" && (
        <div
          className="fixed bg-[#222222] text-white p-5 z-40 rounded-lg shadow-lg"
          style={{
            top: "60px",
            right: "200px",
            width: "50%",
            maxWidth: "320px",
          }}
        >
            <IoIosCloseCircleOutline onClick={handleCancel} className="text-white float-right text-[25px]"/>
          <div className="flex mt-[10px] items-center space-x-2">
            <h2 style={{ fontFamily: "IvyMode, sans-serif" }} className="text-[20px] opacity-75 text-[#EEFF00]">Hey Charlie</h2>
            <MdNotificationsActive 
              style={{ color: "#EEFF00", fontSize: "24px" }}
              className="opacity-75"
            />
          </div>

          <p
            style={{ fontFamily: "BrownLight, sans-serif" }}
            className="my-3 text-[12px] tracking-wider opacity-75"
          >
            "We regret to inform you that the current weather conditions are not
            conducive for a golf session. Would you like to reschedule or cancel
            your golf session for today?"
          </p>

          <div className="flex gap-[30px] mt-5">
            <button
              onClick={handleReschedule}
              className="bg-white text-[12px] text-black py-2 px-6 opacity-90 rounded cursor-pointer"
            >
              Reschedule
            </button>
            <button
              onClick={handleCancel2}
              className="text-white text-[12px] border-b-2 border-white opacity-90 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
