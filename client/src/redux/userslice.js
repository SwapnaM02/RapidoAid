import {createSlice} from "@reduxjs/toolkit";

const userslice = createSlice({
    name:"users",
    initialState:{},
    
    reducers:{
        SetUser:(state,action)=>{
            state.user=action.payload
        }
    }
});

export const {SetUser} = userslice.actions;
export default userslice.reducer;