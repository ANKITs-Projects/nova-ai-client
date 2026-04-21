import { createSlice } from "@reduxjs/toolkit";


const chatProjectDetailSlice = createSlice({
    name: "Project Detail",
    initialState: {
        loading: false,
        error: null,
        detail: null
    },
    reducers: {
        setDetail: (state, action) => {
            state.detail = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
});

export const {setDetail, setError, setLoading} = chatProjectDetailSlice.actions

export default chatProjectDetailSlice.reducer