import { configureStore } from "@reduxjs/toolkit";
// import topChartsReducer from "./topChartsSlice";
import topChartsSlice from "./topChartsSlice";

export const store = configureStore({
    reducer: {
        topCharts: topChartsSlice
    }
})