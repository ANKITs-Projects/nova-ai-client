import { createSlice } from "@reduxjs/toolkit";


const projectChatSlice = createSlice({
    name : "Projects chat",
    initialState: {
        loading: true,
        error: null,
        projectschat: []
    },

    reducers: {
        setProjectChats: (state, action) => {
            state.projectschat = action.payload
        },
        pushProjectChats: (state, action) => {
            state.projectschat = [...action.payload, ...state.projectschat]
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