import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from './moviesSlice'
const appStore = configureStore({

    reducer: {
        // Define your reducers here
        user: userReducer,
        movies: moviesReducer,
    },
})

export default appStore;