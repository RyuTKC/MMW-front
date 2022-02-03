import { SortDirection } from "@material-ui/core";
import { initialMachineData, machineData } from "appConfig";
import { Action, ActionCreator } from "redux";
import { initialState } from "./reducer";
import { MachineTableActionType, MachineTableAction } from "./types";

export const getDataAction = (machineData: machineData, modalFlg: boolean): MachineTableAction => {
  return {
    type: MachineTableActionType.getData,
    data: {
      ...initialMachineData,
      ...machineData
    },
    modalFlg: modalFlg,
  }
}

export const getDatasAction = (machineDatas: machineData[]): MachineTableAction => {
  return {
    type: MachineTableActionType.getDatas,
    data: machineDatas,
  }
}

export const editDataAction= (targetData: machineData[keyof machineData], key: keyof machineData): MachineTableAction=>{
  return {
    type: MachineTableActionType.editData,
    data: targetData,
    key: key
  }
}


export const sortAction = (machineDatas: machineData[], orderBy: keyof machineData, sortDirection: Exclude<SortDirection, boolean>): MachineTableAction => {
  return {
    type: MachineTableActionType.sort,
    sortData: machineDatas,
    sortElement: {
      orderBy: orderBy,
      sortDirection: sortDirection
    }
  }
}

export const pagingAction = (nextPage: number): MachineTableAction => {
  return {
    type: MachineTableActionType.paging,
    nextPage: nextPage
  }
}