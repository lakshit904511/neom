import { useState } from "react";
import over from "../../assets/img/overwhelmed.svg";
import anger from "../../assets/img/anger.svg";
import appre from "../../assets/img/appreciation.svg";
import bore from "../../assets/img/boredom.svg";
import disapp from "../../assets/img/disappointed.svg";
import joy from "../../assets/img/joy.svg";

const Images = [
  { name: "over", src: over },
  { name: "anger", src: anger },
  { name: "appre", src: appre },
  { name: "bore", src: bore },
  { name: "disapp", src: disapp },
  { name: "joy", src: joy },
];

export default function FeedBackIcons() {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (iconName) => {
    if (selectedIcon === iconName) {
      setSelectedIcon(null);
    } else {
      setSelectedIcon(iconName);
    }
  };

  return (
    <div className="mt-[15px] gap-[20px] flex items-center">
      {Images.map((image, index) => (
        <img
          key={index}
          onClick={() => handleIconClick(image.name)}
          className={`w-[30px] h-[30px] ${
            selectedIcon === image.name ? "" : "filter grayscale"
          }`}
          src={image.src} 
          alt={image.name} 
        />
      ))}
    </div>
  );
}
