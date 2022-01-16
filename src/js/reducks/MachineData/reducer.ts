import { MachineTableStateType,  MachineTableActionType } from "./types"
import { Reducer } from "redux";
import { updateAction } from "./action";


const initialState: MachineTableStateType = {
  data: [],
  sortData: [],
  orderBy: "",
  sortDirection: "asc"
}

export const countReducer: Reducer<MachineTableStateType, MachineTableActionType> = (state = initialState, action): MachineTableStateType => {
  let nextState = initialState
  // console.log({
  //   ...state,
  //   value: state.value
  // })

  switch (action.type) {
    case MachineTableActionType.update:
      return {
        ...state,
      }
    case MachineTableActionType.sort:
      return {
        ...state,
      }
    default:
      // const _: never = action
      return state
  }
}