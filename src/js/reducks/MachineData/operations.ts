import { updateAction } from "./action"
import { ThunkAction } from "redux-thunk"
import { MachineTableActionType, MachineTableStateType } from "./types"
import { RootStateType } from "reducks/store"

export const Increment2thunk = (): ThunkAction<Promise<void>, RootStateType, undefined, MachineTableActionType> => {
  return async (dispatch, getState) => {
    const count2State = getState().count2.value
    const a = count2State
    console.log(count2State)
    console.log("いんくりめんとさんくなう")
    dispatch(updateAction)

  }
}