import { createSlice } from "@reduxjs/toolkit";


const projectSlice = createSlice({
    name: "Projects",
    initialState: {
        loading: false,
        error: null,
        projects: []
    },

    reducers: {
        setProjects: (state, action) => {
            state.projects = action.payload
        },
        pushProjects: (state, action) => {
            state.projects = [action.payload, ...state.projects]
        },
        setProjectLoading: (state, action) => {
            state.loading = action.payload
        },
        setProjectError: (state, action) => {
            state.error = action.payload
        }
    }
});

export const {setProjectError, setProjectLoading, setProjects, pushProjects} = projectSlice.actions

export default projectSlice.reducer