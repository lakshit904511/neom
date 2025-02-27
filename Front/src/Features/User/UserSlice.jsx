import { useSelector } from "react-redux";

const initialUserState = {
  loading: false,
  error: null,
  authorized: null,
  fullName: null,
  email: null,
  filterCheck:null,
  mobileNo: null,
  favIcon:null,
  totalCards: [],
  serverTopEventLists: [],
  serverRecommandedEventList: [],
  scheduledEvents: [],
  attendedEvents: [],
  favouriteEvents: [],
  serverProfile:[]
};

export default function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case "user/data":
      return {
        ...state,
        authorized: action.payload.authenticated,
        fullName: action.payload.user ? action.payload.user.name : null,
        mobileNo: action.payload.user ? action.payload.user.mobile_no : null,
        email: action.payload.user ? action.payload.user.email_id : null,
        allCards:action.payload.cardData,
        totalCards: action.payload.cardData,
        scheduledEvents: action.payload.scheduledData,
        attendedEvents: action.payload.attendedData,
        favouriteEvents: action.payload.favouriteData,
        serverRecommandedEventList:action.payload.serverRecommandEventData,
        serverTopEventLists:action.payload.serverTopEventsData,
        serverProfile:action.payload.serverProfileQuestion
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
      return{
        ...state,
        totalCards:action.payload.cards,
        filterCheck:action.payload.change,
      }
    
    case "user/resetFilter":
      return{
        ...state,
        totalCards:state.allCards
      }
    
    case "user/favouriteCard":
      const isAlreadyFavorite = state.favouriteEvents.some(
        (event) => event.id === action.payload.card.id
      );
    
      return {
        ...state,
        favouriteEvents: isAlreadyFavorite
          ? state.favouriteEvents.filter((event) => event.id !== action.payload.card.id) 
          : [...state.favouriteEvents, action.payload.card], 
      };


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

  if (filterCheck === val) {
    payload = {cards: allCards, change: null };  
  } else {
    const filterCards = allCards.filter((card) => card.category === val);
    payload = { cards:filterCards, change: val };
  }

  dispatch({ type: "user/upcomingFilter", payload }); 
};


export const handleFavouriteCard=(card)=>(dispatch,getState)=>{
  
  dispatch({type:"user/favouriteCard",payload:{card}});
    
}
