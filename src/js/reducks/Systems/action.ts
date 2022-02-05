import { SortDirection } from "@material-ui/core";
import { initialSystemData, systemData } from "appConfig";
import { Action, ActionCreator } from "redux";
import { initialState } from "./reducer";
import { SystemsActionType, SystemsAction } from "./types";

export const setSystemAction = (systemData: systemData, editFlg: boolean): SystemsAction => {
  return {
    type: SystemsActionType.setSystem,
    data: {
      ...initialSystemData,
      ...systemData
    },
    editFlg: editFlg,
  }
}

export const setSystemsAction = (systemDatas: systemData[]): SystemsAction => {
  return {
    type: SystemsActionType.setSystems,
    data: systemDatas,
  }
}

export const editDataAction= (targetData: systemData[keyof systemData], key: keyof systemData): SystemsAction=>{
  return {
    type: SystemsActionType.editSystem,
    data: targetData,
    key: key
  }
}


export const sortAction = (systemDatas: systemData[], orderBy: keyof systemData, sortDirection: Exclude<SortDirection, boolean>): SystemsAction => {
  return {
    type: SystemsActionType.sortSystem,
    sortData: systemDatas,
    sortElement: {
      orderBy: orderBy,
      sortDirection: sortDirection
    }
  }
}

export const pagingAction = (nextPage: number): SystemsAction => {
  return {
    type: SystemsActionType.pagingSystem,
    nextPage: nextPage
  }
}