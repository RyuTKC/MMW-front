import { CountStateType, CountActionType } from "./types";
import { Reducer } from "redux";
import { incrementAction2 } from "./action";


const initialState: CountStateType = {
  value: 0
}

export const countReducer: Reducer<CountStateType, CountActionType> = (state = initialState, action): CountStateType => {
  let nextState = initialState
  // console.log({
  //   ...state,
  //   value: state.value
  // })

  switch (action.type) {
    case CountActionType.increment:
      return {
        ...state,
        value: state.value + 1,
      }
    case CountActionType.decrement:
      return {
        ...state,
        value: state.value === 0 ? 0 : state.value - 1
      }
    case CountActionType.countReset:
      return {
        ...state,
        value: 0
      }
    default:
      // const _: never = action
      return state
  }
}