import { configureStore } from "@reduxjs/toolkit";
import topChartsReducer from "./topChartsSlice";

export const store = configureStore({
    reducer: {
        photos: topChartsReducer
    }
})