import { useSelector } from "react-redux";

const initialUserState = {
  loading: false,
  error: null,
  authorized: null,
  fullName: null,
  email: null,
  filterCheck: null,
  mobileNo: null,
  birthDate: null,
  favIcon: null,
  totalCards: [],
  serverTopEventLists: [],
  serverRecommandedEventList: [],
  interestArray: [
    ["Screaming children", false],
    ["Chinese food", false],
    ["Socializing", false],
    ["Golf", false],
    ["Cooking and dining", false],
    ["Music", false],
    ["Plays", false],
    ["Rooms", false],
  ],
  scheduledEvents: [],
  attendedEvents: [],
  favouriteEvents: [],
  serverProfile: [],
};

export default function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case "user/data":
      return {
        ...state,
        authorized: action.payload.authenticated,
        birthDate: action.payload.user
          ? action.payload.user.date_of_birth
          : null,
        fullName: action.payload.user ? action.payload.user.name : null,
        mobileNo: action.payload.user ? action.payload.user.mobile_no : null,
        email: action.payload.user ? action.payload.user.email_id : null,
        allCards: action.payload.cardData,
        totalCards: action.payload.cardData,
        scheduledEvents: action.payload.scheduledData,
        attendedEvents: action.payload.attendedData,
        favouriteEvents: action.payload.favouriteData,
        serverRecommandedEventList: action.payload.serverRecommandEventData,
        serverTopEventLists: action.payload.serverTopEventsData,
        serverProfile: action.payload.serverProfileQuestion,
      };
    case "user/loading":
      return {
        ...state,
        loading: action.payload,
      };
    case "user/error":
      return {
        ...state,
        error: action.payload,
      };

    case "user/upcomingFilter":
      return {
        ...state,
        totalCards: action.payload.cards,
        filterCheck: action.payload.change,
      };

    case "user/resetFilter":
      return {
        ...state,
        totalCards: state.allCards,
      };

    case "user/favouriteCard":
      const isAlreadyFavorite = state.favouriteEvents.some(
        (event) => event.id === action.payload.card.id
      );

      return {
        ...state,
        favouriteEvents: isAlreadyFavorite
          ? state.favouriteEvents.filter(
              (event) => event.id !== action.payload.card.id
            )
          : [...state.favouriteEvents, action.payload.card],
      };

    case "user/remove":
      return {
        ...state,
        favouriteEvents: state.favouriteEvents.filter(
          (event) => event.id !== action.payload.card.id
        ),
      };
    case "user/ReserveSeat":
      const alreadyScheduled = state.scheduledEvents.some(
        (event) => event.id === action.payload.card.id
      );
      return {
        ...state,
        totalCards: state.totalCards.filter(
          (event) => event.id !== action.payload.card.id
        ),
        scheduledEvents: alreadyScheduled
          ? [...state.scheduledEvents]
          : [...state.scheduledEvents, action.payload.card],
      };

    case "user/profile":
      return {
        ...state,
        email: action.payload.updatedEmail,
        mobileNo: action.payload.updatedMobile,
        fullName: action.payload.updatedName,
      };

    case "user/Like":
      return {
        ...state,
        interestArray: action.payload,
      };

    case "user/InputHandle":
      return{
        ...state,
        interestArray:action.payload,
      }

    
    default:
      return state;
  }
}

export function getAllUserData() {
  return async (dispatch, getState) => {
    dispatch({ type: "user/loading", payload: true });

    try {
      const res = await fetch("http://localhost:5000/verify/user", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();

      dispatch({ type: "user/data", payload: data });
    } catch (error) {
      console.error("Error fetching user data:", error);
      dispatch({ type: "user/error", payload: error.message });
    } finally {
      dispatch({ type: "user/loading", payload: false });
    }
  };
}

export const getFilterEvent = (val) => (dispatch, getState) => {
  const state = getState();

  const allCards = state.user.allCards || [];
  const filterCheck = state.user.filterCheck;

  let payload;
  let filterCards;
  if (filterCheck === val) {
    payload = { cards: allCards, change: null };
  } else {
    filterCards = allCards.filter((card) => card.category === val);
    console.log("filterCards");
    payload = { cards: filterCards, change: val };
  }

  console.log(payload);
  dispatch({ type: "user/upcomingFilter", payload });
};

export const handleFavouriteCard = (card) => (dispatch, getState) => {
  dispatch({ type: "user/favouriteCard", payload: { card } });
};

export const handleRemoveCard = (card) => (dispatch, getState) => {
  dispatch({ type: "user/remove", payload: { card } });
};

export const handleReserve = (card) => (dispatch, getState) => {
  dispatch({ type: "user/ReserveSeat", payload: { card } });
};

export const HandleProfile =
  (updatedName, updatedEmail, updatedMobile) => (dispatch, getState) => {
    dispatch({
      type: "user/profile",
      payload: { updatedName, updatedEmail, updatedMobile },
    });
  };

export const handleLike = (value) => (dispatch, getState) => {
  const state = getState();
  const checks = state.user.interestArray;
  // console.log("before click", checks);
  const clickedValue = checks.findIndex((check) => check[0] === value);
  console.log(clickedValue);
  if (checks[clickedValue][1] === false) {
    checks[clickedValue][1] = true;
    // console.log(checks[clickedValue][1]);
  } else {
    checks[clickedValue][1] = false;
    // console.log(checks[clickedValue][1]);
  }
  // console.log("after click", checks);
  dispatch({ type: "user/Like", payload: checks });
};


export const handleInputChange=(likeArray)=>(dispatch,getState)=>{
  dispatch({type:"user/InputHandle",payload:likeArray})
}


export const UserSignIn=(data)=>{
  return async ()=>{
    try {
      const res=await fetch('http://localhost:5000/user/signIn',{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include", 
      });

      console.log("registration Succesful",res.json());
    } catch (error) {
      console.log("problem while sigining in",error.message);
    }
  }
}