import { createAction } from "@reduxjs/toolkit";
import { Action, ActionCreator } from "redux";
import { CountActionType } from "./types";

function withPayloadType<T>() {
  return (t: T) => ({ payload: t })
}

export const incrementAction3 = createAction(CountActionType.increment, withPayloadType<string>())
export const decrementAction3 = createAction(CountActionType.decrement, withPayloadType<string>())

// export const decrementAction3: CountActionType = {
//   type: CountActionType.decrement
// }

// export const resetAction3: CountActionType = {
//   type: CountActionType.countReset
// }


// じっけんちう-------------------------
const i: ActionCreator<CountActionType> = () => {
  return {
    type: CountActionType.increment
  }
}