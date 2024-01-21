import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./dashboardSlice";

export const store = configureStore({
  reducer: {
    dashboardReducer: dashboardSlice,
  },
});
