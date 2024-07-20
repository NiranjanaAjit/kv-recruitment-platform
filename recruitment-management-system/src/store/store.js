import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import apiWithTag from "../api/baseApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        auth: authReducer,
        [apiWithTag.reducerPath]: apiWithTag.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiWithTag.middleware)
})

setupListeners(store.dispatch)

export default store