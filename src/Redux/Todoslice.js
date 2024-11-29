import { createSlice } from "@reduxjs/toolkit";

const  Todoslice=createSlice({
    name:"todo",
    initialState:{
        value:[]

    },
    reducers:{
        addTodo:(state,action)=>{
            state.value.push(action.payload)
        }
    }
})
export const{addTodo}=Todoslice.actions
export default Todoslice.reducer