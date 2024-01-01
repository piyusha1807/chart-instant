import { configureStore } from "@reduxjs/toolkit";
import uploadSlice from "./dashboard/uploadSlice";

export const store = configureStore({
    reducer: {
        uploadReducer: uploadSlice
    }
})