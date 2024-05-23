import { configureStore } from "@reduxjs/toolkit";
import amountSlice from "./amountSlice";

const store = configureStore({
    reducer: {
        cart: amountSlice //iske bad ham jitne bhi slice banayenge yaha aake sabko add kairainge jaise redux me conbineReducer me krte the.
    }
})

export default store;
