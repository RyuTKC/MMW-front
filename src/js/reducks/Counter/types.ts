import { Action } from "redux";

// State Type
export type Count = {
  value: number
}

// Action Type
export const CountActionTypes = {
  increment: "INCREMENT",
  decrement: "DECREMENT",
  countReset: "COUNT_RESET"
} as const;

interface IncrementAction extends Action {
  type: typeof CountActionTypes.increment
}
interface DecrementAction extends Action {
  type: typeof CountActionTypes.decrement
}
interface ResetAction extends Action {
  type: typeof CountActionTypes.countReset
}

export type CounterActionTypes = IncrementAction | DecrementAction | ResetAction