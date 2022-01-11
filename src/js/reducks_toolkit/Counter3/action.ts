import { Action, ActionCreator } from "redux";
import { CountActionType } from "./types";


export const incrementAction3: CountActionType = {
  type: CountActionType.increment,
}

export const decrementAction3: CountActionType = {
  type: CountActionType.decrement
}

export const resetAction3: CountActionType = {
  type: CountActionType.countReset
}


// じっけんちう-------------------------
const i: ActionCreator<CountActionType> = () => {
  return {
    type: CountActionType.increment
  }
}