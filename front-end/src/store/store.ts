import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import estimateReducer from "./slices/estimateSlice";
import cartReducer from "./slices/cardSlice"

const store = configureStore({
  reducer: {
    userData: userReducer,
    estimateData: estimateReducer,
    cartData: cartReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>