import styles from "../Header/header.module.css";
import logo from "../assets/img/logo2.png";
import { RiGlobalLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsList } from "react-icons/bs";
import { useState } from "react";

export default function Header() {
  const [selected, setSelected] = useState(null);

  return (
    <nav className={styles.main}>
      <img className={styles.neom_logo} src={logo} alt="Neom Logo" />

      <ul className={styles.item}>
        <div className={styles.item1}>
          {["Dashboard", "My Favourites", "Upcoming events"].map(
            (item, index) => (
              <li key={index}>
                <a
                  onClick={() => setSelected(index)}
                  className={`text-sm block cursor-pointer pb-1 transition-all duration-300 border-b-2 ${
                    selected === index
                      ? "text-[#FF385C] border-[#FF385C] font-bold"
                      : "text-gray-600 border-transparent"
                  }`}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </div>
        <div className={styles.item2}>
          <li>
            <IoIosNotificationsOutline className="w-[18px]" />
          </li>
          <div className="flex w-[81px] flex-row items-center justify-evenly bg-white px-3 py-2 rounded-4xl">
            <BsList className="w-[35px]" />
            <button className="px-2  bg-red-300  rounded-[100px]">P</button>
          </div>
          <li>
            <RiGlobalLine className="w-[38px]  object-contain" />
          </li>
        </div>
      </ul>
    </nav>
  );
}
