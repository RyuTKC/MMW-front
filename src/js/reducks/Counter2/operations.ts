import { incrementAction2 } from "./action"
import { push } from "connected-react-router"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import store from "reducks/store"

export const Increment2thunk = () => {
  return async (dispatch: Dispatch, getState = store.getState()) => {
    const state = getState
    const count2State = getState.count2.value
    console.log("いんくりめんとさんくなう")
    dispatch(incrementAction2)

  }
}