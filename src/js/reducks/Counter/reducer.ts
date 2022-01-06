import { Count, CounterActionTypes, CountActionTypes } from "./types";

const initialState: Count = {
    value: 0
}

export const countReducer = (state = initialState, action: CounterActionTypes): Count => {
  let nextState = initialState
    switch (action.type) {
        case CountActionTypes.increment:
            return { value: state.value + 1 }
        case CountActionTypes.decrement:
            return { value: state.value === 0 ? 0 : state.value - 1 }
        case CountActionTypes.countReset:
            return { value: 0 }
        default:
            const _: never = action
            return state
    }
}