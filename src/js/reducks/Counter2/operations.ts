import { incrementAction2 } from "./action"
import { ThunkAction } from "redux-thunk"
import { CountActionType, CountStateType } from "./types"
import { RootState } from "reducks/store"

export const Increment2thunk = (): ThunkAction<Promise<void>, RootState, undefined, CountActionType> => {
  return async (dispatch, getState) => {
    const count2State = getState().count2.value
    const a = count2State
    console.log(count2State)
    console.log("いんくりめんとさんくなう")
    dispatch(incrementAction2)

  }
}