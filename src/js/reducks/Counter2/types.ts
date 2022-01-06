import { Action } from "redux";

// State Type
type CountStateType = {
	value: number
}
// Action Type
const CountActionType = {
	increment: "INCREMENT2",
	decrement: "DECREMENT2",
	countReset: "COUNT_RESET2"
} as const;
type CountActionType = Action & {
	type: typeof CountActionType[keyof typeof CountActionType]
}

export { CountStateType, CountActionType }