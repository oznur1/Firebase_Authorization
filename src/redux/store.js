import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/Slice/authSlice"


export const store=configureStore({
    reducer:{
        auth:authReducer
    },
})