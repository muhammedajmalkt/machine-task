import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Todoslice"

const Store=configureStore({
    reducer:{
        Todo:todoReducer
    }

})
export default Store