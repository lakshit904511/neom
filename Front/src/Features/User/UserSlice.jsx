import { loadStripe } from "@stripe/stripe-js";

const initialUserState = {
  loading: false,
  error: null,
  authorized: false,
  user_id: null,
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
        user_id: action.payload.user ? action.payload.user.user_id : null,
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
      return {
        ...state,
        interestArray: action.payload,
      };

    default:
      return state;
  }
}

// function provide verification of user and data of user

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

// function working on filtering the cards

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


// handle favorite card 

export const handleFavouriteCard = (card) => async (dispatch, getState) => {
  const state = getState();
  const data = { cardId: card.id, userId: state.user.user_id };
  console.log(data);
  const res = await fetch("http://localhost:5000/card/fav", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const val = await res.json();
  if (val.success) {
    await dispatch(getAllUserData());
  }
};


// handle remove card

export const handleRemoveCard = (card) => async(dispatch, getState) => {
  const state = getState();
  const data = { cardId: card.id, userId: state.user.user_id };
  console.log(data);
  const res = await fetch("http://localhost:5000/card/remove", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const val = await res.json();
  if (val.success) {
    await dispatch(getAllUserData());
  }
};


// handle reserve card
export const handleReserve = (card_id,guestCount) => async(dispatch, getState) => {
  const state = getState();
  const data = {cardId: card_id, userId: state.user.user_id, seat:guestCount};
  console.log(data);
  const res = await fetch("http://localhost:5000/card/reserve", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const val = await res.json();
  if (val.success) {
    await dispatch(getAllUserData());
  }
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
  const clickedValue = checks.findIndex((check) => check[0] === value);
  console.log(clickedValue);
  if (checks[clickedValue][1] === false) {
    checks[clickedValue][1] = true;
  } else {
    checks[clickedValue][1] = false;
  }
  dispatch({ type: "user/Like", payload: checks });
};

export const handleInputChange = (likeArray) => (dispatch, getState) => {
  dispatch({ type: "user/InputHandle", payload: likeArray });
};


export const UserSignIn = (data) => {
  return async () => {
    try {
      const res = await fetch("http://localhost:5000/user/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      const responseData = await res.json();

      if (!res.ok) {
        console.error("Error while signing in:", responseData.message);
        return;
      }

      if (responseData.redirectUrl) {
        window.location.href = responseData.redirectUrl;
      }
    } catch (error) {
      console.error("Problem while signing in:", error.message);
    }
  };
};

export const userlogin = (data) => {
  return async () => {
    try {
      const res = await fetch("http://localhost:5000/user/loginIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });

      const responseData = await res.json();

      if (!res.ok) {
        console.error("Error while signing in:", responseData.message);
        return;
      }

      if (responseData.redirectUrl) {
        window.location.href = responseData.redirectUrl;
      }
    } catch (error) {
      console.error("Problem while logining in:", error.message);
    }
  };
};

const stripePromise = loadStripe(
  "pk_test_51QzDEW2eBk2Ytfec9qDwRxqP8kahT49DURiIC66jGTmTqJjm8wjVuKyo5AJgkHAek55zPl2X0VkQHWAZBM5ZKNDP00qHUlKS20"
);

export const stripePayment=(id,name,image,amount,seat)=>{
  return async()=>{
    const stripe = await stripePromise;

        const body = {
          products: [
            {
              id: id,
              name: name,
              image_main: image,
            },
          ],
          pay: amount,
          guest: seat,
        };

        const res = await fetch("http://localhost:5000/payment/check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        if (!res.ok) {
          throw new Error("Failed to create Stripe session");
        }

        const session = await res.json();

        if (!session.id) {
          throw new Error("Invalid session ID received");
        }

        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          console.log("Error during payment:", result.error);
          return;
        }
  }
}