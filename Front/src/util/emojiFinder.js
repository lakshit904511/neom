import over from "../assets/img/overwhelmed.svg";
import anger from "../assets/img/anger.svg";
import bore from "../assets/img/boredom.svg";
import disapp from "../assets/img/disappointed.svg";
import joy from "../assets/img/joy.svg";

const Images = [
  { name: "anger", src: anger, range: [0, 1] },
  { name: "disapp", src: disapp, range: [1, 2] },
  { name: "bore", src: bore, range: [2, 3] },
  { name: "joy", src: joy, range: [3, 4] },
  { name: "over", src: over, range: [4, 5] },
];

export default function getEmojiImage(rating) {
  const image = Images.find(img => rating >= img.range[0] && rating < img.range[1]);
  return image ? image.src : null; 
}





