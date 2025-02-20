import styles from "../Header/header.module.css";
import logo from "../../assets/img/logo2.png";
import { RiGlobalLine } from "react-icons/ri";
import { MdNotifications  } from "react-icons/md";
import { BsList } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import ModalLanguage from "../Modals/ModalLanguage";
import ModalProfile from "../Modals/ModalProfile";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import RescheduleModal from "../Modals/RescheduleModal";
import RescheduleNow from "../Modals/RescheduleNow";

const navItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "My Favourites", path: "/favourites" },
  { name: "Upcoming events", path: "/events" },
];
export default function Header() {
  const [selected, setSelected] = useState(null);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const notificationRef = useRef(null);
  const navigate=useNavigate();
  const [show, setShow] = useState([false, null]);


  const handleShow = () => {
    setShow([false, null]);
  };


  const handleCancel2 = () => {
    setShow([true, 2]);
  };


  const handleReschedule = () => {
    setShow([true, 1]);
  };


  const handleReschedule1 = (val) => {
    setShow([false, null]);
    console.log(val);
    navigate("/schedule",{state:{text:val}});
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".menu-list")) {
        setSelected(null);
      }
      if (
        !event.target.closest(".language-dropdown") &&
        !event.target.closest(".language-icon")
      ) {
        setShowLanguage(false);
      }
      if (
        !event.target.closest(".profile-dropdown") &&
        !event.target.closest(".profile-icon")
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className={styles.main}>
      <NavLink to="/">
        <img className={styles.neom_logo} src={logo} alt="Neom Logo" />
      </NavLink>
      <ul className={`${styles.item} menu-list`}>
        <div
          style={{ fontFamily: "Brown, sans-serif" }}
          className={styles.item1}
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-[10px] tracking-[.40px] block cursor-pointer pb-1 transition-all duration-300 border-b-2 ${
                    isActive
                      ? "text-[#FF385C] border-[#FF385C] font-bold"
                      : "text-gray-600 border-transparent"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </div>
        <div className={styles.item2}>
          <div className="relative">
            <li ref={notificationRef}>
              <MdNotifications  className="relative w-[18px] text-gray-400" />
              <div className="absolute top-0 right-1 border-2 opacity-80 rounded-[100px] border-[#9c7c27]"></div>
            </li>
            <RescheduleModal
              notificationRef={notificationRef}
              handleCancel2={handleCancel2}
              handleReschedule={handleReschedule}
            />
            <RescheduleNow
              show={show}
              handleShow={handleShow}
              handleReschedule1={handleReschedule1}
            />
          </div>
          <div className="relative">
            <div
              onClick={(e) => {
                e.stopPropagation();
                setShowProfile(!showProfile);
              }}
              className="profile-icon flex w-[55px] flex-row items-center justify-evenly bg-white px-1 py-2 rounded-4xl cursor-pointer"
            >
              <BsList className="w-[15px]" />
              <button className="px-2 bg-red-300 text-[12px] rounded-[100px]">
                P
              </button>
            </div>
            {showProfile && <ModalProfile />}
          </div>

          <li className="relative">
            <RiGlobalLine
              className="object-contain cursor-pointer language-icon"
              onClick={(e) => {
                e.stopPropagation();
                setShowLanguage(!showLanguage);
              }}
            />
            {showLanguage && <ModalLanguage />}
          </li>
        </div>
      </ul>
    </nav>
  );
}
