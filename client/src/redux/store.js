import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loaderSlice";
import usersReducer from "./userslice";

const store = configureStore({
    reducer:{
        loaders:loaderReducer,
        users:usersReducer,
    },
});

export default store;