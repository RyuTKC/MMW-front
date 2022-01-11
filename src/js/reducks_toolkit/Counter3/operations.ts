import { incrementAction3 } from "./action"
import { createAsyncThunk, ThunkAction, Action } from "@reduxjs/toolkit"
import { CountActionType, CountStateType } from "./types"
import { RootStateType } from "reducks/store"
// import { increment } from "./slice"
import store from "reducks_toolkit/store"

export const Increment3thunk2 = createAsyncThunk<void, undefined>(
  "counter",
  async (_, thunkAPI) => {
    // thunkAPI.dispatch(increment())
  }
)
