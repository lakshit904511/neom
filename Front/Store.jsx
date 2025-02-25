import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./src/Features/User/UserSlice";

import ServerReducer from "./src/Features/Servr/ServerSlice";

const store = configureStore({
  reducer: {
    user: UserReducer,
    server: ServerReducer,
  },
});

export default store;
