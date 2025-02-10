import styles from "../Header/header.module.css";
import logo from "../../assets/img/logo2.png";
import { RiGlobalLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsList } from "react-icons/bs";
import { useEffect, useState } from "react";
import ModalLanguage from "../Modals/ModalLanguage";
import ModalProfile from "../Modals/ModalProfile";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "My Favourites", path: "/favourites" },
  { name: "Upcoming events", path: "/events" },
];
export default function Header() {
  const [selected, setSelected] = useState(null);
  const [login, setLogin] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

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
          <li>
            <IoIosNotificationsOutline className="w-[18px]" />
          </li>
          {/* {!login ? (
            <button
              onClick={() => setLogin(true)}
              className="flex w-[81px] flex-row items-center justify-evenly bg-white px-3 py-2 rounded-4xl border border-red-100"
            >
              Login
            </button>
          ) : ( */}
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
