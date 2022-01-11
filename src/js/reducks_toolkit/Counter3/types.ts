import { Action } from "redux";

// State Type
type CountStateType = {
	value: number
}
// Action Type
const CountActionType = {
	increment: "INCREMENT3",
	decrement: "DECREMENT3",
	countReset: "COUNT_RESET3"
} as const;
type CountActionType = Action & {
	type: typeof CountActionType[keyof typeof CountActionType]
}

export { CountStateType, CountActionType }