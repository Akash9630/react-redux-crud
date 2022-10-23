import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./cars/CarSlice"
export const store = configureStore({
    reducer: {
        cars: carReducer
    }
})