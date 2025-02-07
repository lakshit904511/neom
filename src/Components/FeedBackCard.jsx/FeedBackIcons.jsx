import { useState } from "react";
import over from "../../assets/img/overwhelmed.svg";
import anger from "../../assets/img/anger.svg";
import appre from "../../assets/img/appreciation.svg";
import bore from "../../assets/img/boredom.svg";
import disapp from "../../assets/img/disappointed.svg";
import joy from "../../assets/img/joy.svg";

export default function FeedBackIcons() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (iconName) => {
    if(selectedIcon===iconName){
      setSelectedIcon(null);
    }
    if(selectedIcon!==iconName)
    {setSelectedIcon(iconName);}
  };
  return (
    <div className="mt-[15px] gap-[20px] flex items-center">
      <img
        onClick={() => handleIconClick("over")}
        className={`w-[30px] h-[30px] ${
          selectedIcon === "over" ? "" : "filter grayscale"
        }`}
        src={over}
        alt="Over"
      />
      <img
        onClick={() => handleIconClick("anger")}
        className={`w-[30px] h-[30px] ${
          selectedIcon === "anger" ? "" : "filter grayscale"
        }`}
        src={anger}
        alt="Anger"
      />
      <img
        onClick={() => handleIconClick("appre")}
        className={`w-[30px] h-[30px] ${
          selectedIcon === "appre" ? "" : "filter grayscale"
        }`}
        src={appre}
        alt="Appre"
      />
      <img
        onClick={() => handleIconClick("bore")}
        className={`w-[30px] h-[30px] ${
          selectedIcon === "bore" ? "" : "filter grayscale"
        }`}
        src={bore}
        alt="Bore"
      />
      <img
        onClick={() => handleIconClick("joy")}
        className={`w-[30px] h-[30px] ${
          selectedIcon === "joy" ? "" : "filter grayscale"
        }`}
        src={joy}
        alt="Joy"
      />
      <img
        onClick={() => handleIconClick("disapp")}
        className={`w-[30px] h-[30px] ${
          selectedIcon === "disapp" ? "" : "filter grayscale"
        }`}
        src={disapp}
        alt="Disapp"
      />
    </div>
  );
}
