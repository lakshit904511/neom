const initialUserState = {
  loading: false,
  error: null,
  authorized: null,
  fullName: null,
  email: null,
  mobileNo: null,
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
