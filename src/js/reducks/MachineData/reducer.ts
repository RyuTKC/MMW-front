import { MachineTableStateType, MachineTableActionType, MachineTableActionKind } from "./types"
import { Reducer } from "redux";
import { updateAction } from "./action";

export const initialState: MachineTableStateType = {
  data: [],
  sortData: [],
  tableData: {
    displayColumns: {},
    actualColumns: [],
    sortData: []
  },
  sortElement: {
    orderBy: "machine_id",
    sortDirection: "desc"
  }
}

export const machineDataReducer: Reducer<MachineTableStateType, MachineTableActionType> = (state = initialState, action): MachineTableStateType => {

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
      const _: never = action
      return state
  }
}