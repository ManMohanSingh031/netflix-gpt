import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moivesReducer from "./moivesSlice";

const appStore = configureStore({
  reducer: {
    // Add reducers here
    user: userReducer,
    moives: moivesReducer,
  },
});

export default appStore;
