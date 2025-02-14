const userData = [
  {
    id: 0,
    name: "Charlie",
    emailId: "charlie@gmail.com",
    dateOfBirth: "08 / 01 / 1979",
    MobileNo: "9971 87 7676",

    //  these numbers are the id's of array of cards of scheduled event and all


    scheduledEventCards: [1, 2, 3, 4, 1, 5],

    attendedEventCards: [
      { id: 1, review: 5 },
      { id: 2, review: 4 },
      { id: 3, review: null },
      { id: 1, review: 5 },
      { id: 2, review: null },
    ],


    favoriteEventCards: [1, 2, 3, 1, 3, 1, 1, 4],


  },
];

export default userData;