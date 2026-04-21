import { createSlice } from "@reduxjs/toolkit";


const projectChatSlice = createSlice({
    name : "Projects chat",
    initialState: {
        loading: true,
        error: null,
        chats: []
    },

    reducers: {
        setProjectChats: (state, action) => {
            state.chats = action.payload
        },
        pushProjectChats: (state, action) => {
            state.chats = [...state.chats, ...action.payload]
        },
        setProjectChatLoading: (state, action) => {
            state.loading = action.payload
        },
        setProjectChatError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const {setProjectChats, pushProjectChats, setProjectChatLoading, setProjectChatError} = projectChatSlice.actions;
export default projectChatSlice.reducer;