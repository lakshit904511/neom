const initialUserState = {
  authorized:null,
  fullName: null,
  email: null,
  mobileNo: null,
  totalCards:null,
  scheduledEvents: null,
  attendedEvents: null,
  favouriteEvents: null,
};

export default function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case "user/data":
      return {
        ...state,
        authorized:action.payload.authenticated,
        fullName: action.payload.user ? action.payload.user.name : null,
        mobileNo: action.payload.user ? action.payload.user.mobile_no : null,
        email:action.payload.user ? action.payload.user.email_id : null,
        totalCards:action.payload.cardData,
        scheduledEvents:action.payload.scheduledData,
        attendedEvents: action.payload.attendedData,
        favouriteEvents: action.payload.favouriteData
      }

    default:
      return state;
  }
}

export function getAllUserData(){
    return(dispatch,getstate)=>{
        async function checkAuth() {
            const res = await fetch("http://localhost:5000/auth/user", {
              method: "GET",
              credentials: "include",
            });
            const data = await res.json();
            console.log(data);
            dispatch({type:"user/data",payload:data})
          }
          checkAuth();
    }
}
