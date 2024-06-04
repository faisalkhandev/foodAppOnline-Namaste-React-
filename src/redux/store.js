import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

export const appStore = configureStore({
    reducer: {
        itemReducer: cartSlice
    }
})