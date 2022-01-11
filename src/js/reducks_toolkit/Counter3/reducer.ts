import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { CountStateType, CountActionType } from "./types";
import { decrementAction3, incrementAction3 } from "./action";

const initialState: CountStateType = {
  value: 0
}


export const countReducer = createReducer(initialState, {
  [incrementAction3.type]: (state, action: PayloadAction<number>) => {
    state.value += 1
  },
  [decrementAction3.type]: (state, action: PayloadAction<number>) => {
    state.value -= 1
  }
})