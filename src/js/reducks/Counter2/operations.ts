import { incrementAction2 } from "./action"
import { push } from "connected-react-router"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { CountActionType, CountStateType } from "./types"

export const Increment2thunk = (): ThunkAction<Promise<void>, CountStateType, undefined, CountActionType> => {
  return async (dispatch, state) => {
    const count2State = state()
    const a = count2State
    console.log(count2State)
    console.log("いんくりめんとさんくなう")
    dispatch(incrementAction2)

  }
}