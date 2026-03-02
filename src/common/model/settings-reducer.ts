import { createAction, createReducer } from "@reduxjs/toolkit";

export const saveSettingsAC = createAction<{minValue: number, maxValue: number}>('settings/save');
export const initialStateSettings = {minValue: 0, maxValue: 5}

export const settingsReducer = createReducer(initialStateSettings, (builder) => {
    builder 
        .addCase(saveSettingsAC, (_state, action) => {
            return {minValue: action.payload.minValue, maxValue: action.payload.maxValue}
        })
})