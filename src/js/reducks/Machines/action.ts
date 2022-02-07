import { SortDirection } from "@material-ui/core";
import { initialMachineData, machineData } from "appConfig";
import { MachinesActionType, MachinesAction } from "./types";

export const setMachineAction = (machineData: machineData, modalFlg: boolean): MachinesAction => {
  return {
    type: MachinesActionType.setMachine,
    data: {
      ...initialMachineData,
      ...machineData
    },
    modalFlg: modalFlg,
  }
}

export const setMachinesAction = (machineDatas: machineData[]): MachinesAction => {
  return {
    type: MachinesActionType.setMachines,
    data: machineDatas,
  }
}

export const editDataAction= (targetData: machineData[keyof machineData], key: keyof machineData): MachinesAction=>{
  return {
    type: MachinesActionType.editMachine,
    data: targetData,
    key: key
  }
}

export const sortMachineAction = (machineDatas: machineData[], orderBy: keyof machineData, sortDirection: Exclude<SortDirection, boolean>): MachinesAction => {
  return {
    type: MachinesActionType.sortMachine,
    sortData: machineDatas,
    sortElement: {
      orderBy: orderBy,
      sortDirection: sortDirection
    }
  }
}

export const pagingMachineAction = (nextPage: number): MachinesAction => {
  return {
    type: MachinesActionType.pagingMachine,
    nextPage: nextPage
  }
}