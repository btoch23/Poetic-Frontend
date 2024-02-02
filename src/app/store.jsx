import { configureStore } from "@reduxjs/toolkit";
import { poemsReducer } from "../features/poems/poemsSlice";
import logger from "redux-logger";

export const store = configureStore({
    reducer: {
        poems: poemsReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});