import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./home";
import artistReducer from "./artists"
import alertReducer from "./alert"
export default configureStore({
    reducer : {
        home : homeReducer,
        artist : artistReducer,
        alert : alertReducer
    }
})
