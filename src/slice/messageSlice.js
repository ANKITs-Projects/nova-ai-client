import { createSlice } from "@reduxjs/toolkit";
import { setError, setLoading } from "./userSlice";

const messageSlice = createSlice({
    name: "Chat Message",
    initialState: {
        loading: false,
        error: null,
        messages: []
    },
    reducers: {
        setMessages: (state, action) => {
            state.messages = action.payload
        },
        pushMessages: (state, action) => {
            state.messages = [...state.messages, ...action.payload]
        },
        setMessageLoading: (state, action) => {
            state.loading = action.payload
        },
        setMessageError: (state, action) => {
            state.error = action.payload
        }
    }
});

export const {setMessages, pushMessages, setMessageLoading, setMessageError} = messageSlice.actions;
export default messageSlice.reducer;