import { createAction, createReducer } from "@reduxjs/toolkit";

export const incrementCountAC = createAction('counter/incrementCount');
export const resetCountAC = createAction<{minValue: number}>('counter/resetCount');
export const initialState = {counterValue: 0}

export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(incrementCountAC, (state) => {
            return {...state, counterValue: state.counterValue + 1}
        })
        .addCase(resetCountAC, (_state, action) => {
            return {counterValue: action.payload.minValue};
        })
})