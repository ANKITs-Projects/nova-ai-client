import { createSlice } from "@reduxjs/toolkit";
import { setError, setLoading } from "../slice/userSlice";


const generalChatSlice = createSlice({
    name : "General chat",
    initialState: {
        loading: true,
        error: null,
        chats: []
    },

    reducers: {
        setChats: (state, action) => {
            state.chats = action.payload
        },
        pushChats: (state, action) => {
            state.chats = [action.payload, ...state.chats]
        },
        setChatLoading: (state, action) => {
            state.loading = action.payload
        },
        setChatError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const {setChats, pushChats, setChatLoading, setChatError} = generalChatSlice.actions;
export default generalChatSlice.reducer;