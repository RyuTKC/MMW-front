import { SortDirection } from "@material-ui/core";
import { machineData } from "appConfig";
import { Action, ActionCreator } from "redux";
import { MachineTableActionKind, MachineTableActionType } from "./types";


export const updateAction = (machineDatas: machineData[]): MachineTableActionType => {
  return {
    type: MachineTableActionKind.update,
    data: machineDatas
  }
}

export const sortAction = (machineDatas: machineData[], orderBy: keyof machineData, sortDirection: Exclude<SortDirection, boolean>): MachineTableActionType => {
  return {
    type: MachineTableActionKind.sort,
    sortData: machineDatas,
    sortElement: {
      orderBy: orderBy,
      sortDirection: sortDirection
    }
  }
}