import { Action } from "redux";
import { CountActionType } from "./types";


export const incrementAction2: CountActionType = {
  type: CountActionType.increment,
}

export const decrementAction2: CountActionType = {
  type: CountActionType.decrement
}

export const resetAction2: CountActionType = {
  type: CountActionType.countReset
}
