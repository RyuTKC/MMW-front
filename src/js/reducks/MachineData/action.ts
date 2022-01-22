import { SortDirection } from "@material-ui/core";
import { machineData, machineData2 } from "appConfig";
import { Action, ActionCreator } from "redux";
import { initialState } from "./reducer";
import { MachineTableActionType, MachineTableAction } from "./types";

export const getDataAction = (machineData: machineData2, modalFlg: boolean): MachineTableAction=>{
  return {
    type: MachineTableActionType.getData,
    data: machineData,
    modalFlg: modalFlg,
  }
}

export const getDatasAction = (machineDatas: machineData[]): MachineTableAction => {
  return {
    type: MachineTableActionType.getDatas,
    data: machineDatas,
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