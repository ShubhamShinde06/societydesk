import { configureStore } from "@reduxjs/toolkit";
import globalSliceReducer from './global/globalState'
import apiSlice from "./api/apiSlice";

export const store = configureStore({
    reducer: {
        globalState : globalSliceReducer,
         [apiSlice.reducerPath] : apiSlice.reducer
    },
    middleware: (prevMiddleware) => prevMiddleware().concat([apiSlice.middleware]),
})