import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./src/Features/User/UserSlice";

const store = configureStore({
  reducer: {
    user: UserReducer,
    
  },
});

export default store;
