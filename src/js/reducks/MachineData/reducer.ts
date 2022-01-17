import { MachineTableStateType, MachineTableActionType, MachineTableActionKind } from "./types"
import { Reducer } from "redux";
import { updateAction } from "./action";

const initialState: MachineTableStateType = {
  data: [],
  sortData: [],
  sortElement: {
    orderBy: "machine_id",
    sortDirection: "asc"
  }
}

export const machineDataReducer: Reducer<MachineTableStateType, MachineTableActionType> = (state = initialState, action): MachineTableStateType => {
  let nextState = initialState
  // console.log({
  //   ...state,
  //   value: state.value
  // })

  switch (action.type) {
    case MachineTableActionKind.update:
      return {
        ...state,
        data: action.data
      }
    case MachineTableActionKind.sort:
      return {
        ...state,
        sortData: action.sortData,
        sortElement: action.sortElement
      }
    default:
      // const _: never = action
      return state
  }
}