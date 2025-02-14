import mountain from "../img/mountain.jpg";
import yoga from "../img/yoga.jpg";
import surfing from "../img/surfing.jpg";
import holiday from "../img/holiday_0.png";
import disappoint from "../img/disappointed.svg";
import joy from "../img/joy.svg";
import over from "../img/overwhelmed.svg";
import Children from "../img/child.png";
import chinese from "../img/chinese.png";
import socialize from "../img/cooking-dining.png";
import cooking from "../img/exploring.png";
import golfPng from "../img/golf.png";
import music from "../img/music.png";
import music1 from "../img/music.jpg";

import play from "../img/plays.png";
import room from "../img/rooms.png";

import golfImage from "../img/golf.jpg";
import surfingImage from "../img/surfing.jpg";
import islandImage from "../img/island.jpg";

import user1 from "../img/user1.png";
import user2 from "../img/user2.png";
import user3 from "../img/user3.png";
import user4 from "../img/user4.png";
import user5 from "../img/user5.png";

const settingData = [
  {
    id: 1,
    text1: "Personal and Account Information",
    check: null,
    btn: null,
    text2:
      "Would you like to share your personal information with us to know you better?",
  },
  {
    id: 2,
    btn: null,
    check: null,
    text1: "Consent for sharing information with operators",
    text2:
      "Would you like to share your personal information with the operator to serve you better?",
  },
  {
    id: 3,
    btn: null,
    check: null,
    text1: "Manage your data",
    text2:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod?",
  },
  {
    id: 4,
    btn: null,
    check: null,
    text1: "Password and Security",
    text2:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod?",
  },
  {
    id: 5,
    btn: 1,
    check: null,
    text1: "Notifications",
    text2: "Which type of notifications would you like to receive?",
  },
  {
    id: 6,
    btn: 1,
    check: 1,
    text1: "Language",
    text2:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod?",
  },
];
const dataFeedBack = [
  {
    id: 1,
    image: holiday,
    image_title: "Men's Golf League",
    image_date: "Nov 10-29, 2022",
    image_review: "123 reviews",
    date: "Nov 17, 2022",
    main_para:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
    main_title: "Great experience!",
  },
  {
    id: 2,
    image: islandImage,
    image_title: "Swimming game for below 18 year kids",
    image_date: "Nov 10-29, 2022",
    image_review: "123 reviews",
    date: "Nov 17, 2022",
    main_para: null,
    main_title:
      "Hey Charlie, you haven't added you feedback yet. Please share your experience with us to serve you better next time.",
  },
  {
    id: 3,
    image: music1,
    image_title: "Live comedy Performance in front of live audience",
    image_date: "Nov 10-29, 2022",
    image_review: "123 reviews",
    date: "Nov 17, 2022",
    main_para:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
    main_title: "Thank you Unified Guests for this great experience!",
  },
  {
    id: 4,
    image: golfImage,
    image_title: "Men's Golf League",
    image_date: "Nov 10-29, 2022",
    image_review: "123 reviews",
    date: "Nov 17, 2022",
    main_para:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elit.",
    main_title: "Great experience!",
  },
];

const formData = [
  {
    id: 1,
    image: Children,
    name: "Screaming children",
  },
  {
    id: 2,
    image: chinese,
    name: "Chinese food",
  },
  {
    id: 3,
    image: socialize,
    name: "Socializing",
  },
  {
    id: 4,
    image: golfPng,
    name: "Golf",
  },
  {
    id: 5,
    image: cooking,
    name: "Cooking and dining",
  },
  {
    id: 6,
    image: music,
    name: "Music",
  },
  {
    id: 7,
    image: play,
    name: "Plays",
  },
  {
    id: 8,
    image: room,
    name: "Rooms",
  },
];

const dataDashBoardCard4 = [
  {
    id: 1,
    date: "Nov 10, 2022",
    image: golfImage,
    guest: 2,
    name: "Round of Golf",
    rating: 5,
  },
  {
    id: 2,
    date: "Nov 12, 2022",
    image: surfing,
    guest: 3,
    name: "Surfing",
    rating: 5,
  },
  {
    id: 3,
    date: "Nov 14, 2022",
    image: holiday,
    guest: 1,
    name: "Jazz Concert",
    rating: null,
  },
  {
    id: 4,
    date: "Nov 1, 2022",
    image: islandImage,
    guest: 4,
    name: "Sweet Wonderland",
    rating: null,
  },
  {
    id: 5,
    date: "Nov 15, 2022",
    image: surfing,
    guest: 5,
    name: "Kite Surfing",
    rating: 5,
  },
];

const dataDashBoardCard3 = [
  {
    id: 1,
    title: "Invigorating & Uplifting",
    date: "Nov 10-29",
    image: golfImage,
    icon: joy,
    name: "Round of Golf",
    time: "10:30 AM - 7:30 PM",
  },
  {
    id: 2,
    title: "Active & Energizing",
    date: "Nov 10-29",
    image: surfing,
    icon: over,
    name: "Surfing",
    time: "10:30 AM - 7:30 PM",
  },
  {
    id: 3,
    title: "Vibrant & Social",
    date: "Nov 10-29",
    image: holiday,
    icon: over,
    name: "Jazz Concert",
    time: "10:30 AM - 7:30 PM",
  },
  {
    id: 4,
    title: "Glamorous & Grand",
    date: "Nov 10-29",
    image: islandImage,
    icon: joy,
    name: "Sweet Wonderland",
    time: "10:30 AM - 7:30 PM",
  },
  {
    id: 5,
    title: "Active & Energizing",
    date: "Nov 10-29",
    image: surfing,
    icon: joy,
    name: "Kite Surfing",
    time: "10:30 AM - 7:30 PM",
  },
];

const dataDashBoardCard2 = [
  {
    id: 1,
    title: "Indulge in the Finest Epicurean Cuisines",
    image: mountain,
    emoji: disappoint,
    textBtn: "Yes, I accept",
    textBtn2: "No, Thanks",
    description:
      "Hi Charlie, we came to from our chef John that you didn't enjoyed the Epicurean cuisines yesterday. As a compensation we would like to offer you a free Italian cuisines as a goodwill gesture. Would you like to accept our request?",
  },
  {
    id: 2,
    title: "Surfing at leisure",
    image: surfing,
    emoji: joy,
    textBtn: "Yes, I would Share",
    textBtn2: "Remind me later",
    description:
      "Hello Susan, we noticed that you have amazing surfing skills and we hope that you had a great time here while surfing. How was your experience with us! Would you mind sharing with?",
  },
  {
    id: 3,
    title: "Dive into Exciting Island Holiday Experiences",
    image: yoga,
    emoji: joy,
    textBtn: "Yes, I would Share",
    textBtn2: "Remind me later",
    description:
      "Hello Susan, we noticed that you have amazing surfing skills and you had a great time while surfing. Please share your experience with us! Would you mind sharing with you didn't enjoyed the Epicurean cuisines?",
  },
];

const dataDashBoardCard1 = [
  {
    id: 1,
    title: "Round of Golf",
    img: golfImage,
  },
  {
    id: 2,
    title: "Surfing at leisure",
    img: surfingImage,
  },
  {
    id: 3,
    title: "Island Holiday",
    img: islandImage,
  },
];

const dataMyFavoritesCard = [
  {
    id: 1,
    image: islandImage,
    title: "Explore the deep sea",
    date: "From Nov 10 to 29, 2022",
    time: "10:30 AM - 7:30 PM",
  },
  {
    id: 2,
    image: golfImage,
    title: "Invigorating & Uplifting",
    date: "From Nov 10 to 29, 2022",
    time: "10:30 AM - 7:30 PM",
  },
  {
    id: 3,
    image: mountain,
    title: "Explore the mountain",
    date: "From Nov 10 to 29, 2022",
    time: "10:30 AM - 7:30 PM",
  },
];

const dataFilters = [
  "Stand Up Comedy",
  "Book Exhibitions",
  "Kite Surfing",
  "Talks Shows",
  "Singing",
  "Golf Tournament",
  "Swimming",
  "Box Cricket",
  "RAMP Walk",
];

const dataDetailedCard = [
  { id: 1, name: "Anastasia", image: user1 },
  { id: 2, name: "Warren", image: user2 },
  { id: 3, name: "Martin", image: user3 },
  { id: 4, name: "Michelle", image: user4 },
  { id: 5, name: "Pamela", image: user5 },
];

export {
  dataDashBoardCard1,
  dataDashBoardCard2,
  dataDashBoardCard3,
  dataDashBoardCard4,
  dataMyFavoritesCard,
  dataFeedBack,
  dataDetailedCard,
  formData,
  settingData,
  dataFilters,
};
