import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./home";
import artistReducer from "./artists"
export default configureStore({
    reducer : {
        home : homeReducer,
        artist : artistReducer
    }
})
