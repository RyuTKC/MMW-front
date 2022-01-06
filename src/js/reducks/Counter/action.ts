import { CounterActionTypes, CountActionTypes } from "./types";

export const incrementAction = (): CounterActionTypes => {
    return {
        type: CountActionTypes.increment,
    }
}

export const decrementAction = (): CounterActionTypes => {
    return {
        type: CountActionTypes.decrement
    }
}

export const resetAction = (): CounterActionTypes => {
    return {
        type: CountActionTypes.countReset
    }
}