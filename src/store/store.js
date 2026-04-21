import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./../slice/userSlice";
import generalChatReducer from "./../slice/generalChatSlice"
import messageReducer from "../slice/messageSlice"
import projectReducer from "../slice/projectSlice"
import projectChatReducer from "../slice/projectChatSlice"

const store = configureStore({
    reducer : {
        user: userReducer,
        generalChat: generalChatReducer,
        message: messageReducer,
        project: projectReducer,
        projectChats: projectChatReducer
    }
})

export default store;