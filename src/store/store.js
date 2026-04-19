import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./../slice/userSlice";
import generalChatReducer from "./../slice/generalChatSlice"

const store = configureStore({
    reducer : {
        user: userReducer,
        generalChat: generalChatReducer
    }
})

export default store;