import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootStateType } from "reducks/store";
import { Increment3thunk2 } from "./operations";
import { CountStateType } from "./types";

const initialState: CountStateType = {
  value: 0
}

export const countSlice = createSlice(
  {
    name: "counter",
    initialState,
    reducers: {
      increment: (state) => { state.value += 1 },
      decrement: (state) => { state.value -= 1 },
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload
      },
    },
    extraReducers: (builder) => {
      builder.addCase(Increment3thunk2.fulfilled, (state, action) => {
        console.log(action.payload)
        state.value += 1
      })
    },
  }
)

export const { increment, decrement, incrementByAmount } = countSlice.actions
export const selectCount = (state: RootStateType) => state.count.value
export default countSlice.reducer