import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/counter-reducer";
import { settingsReducer } from "../model/settings-reducer";

export const RootReducer = combineReducers({
    counter: counterReducer,
    settings: settingsReducer
})

export const store = configureStore({
    reducer: RootReducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;