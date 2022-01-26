import { SortDirection } from "@material-ui/core";
import { systemData } from "appConfig";
import { Action, ActionCreator } from "redux";
import { initialState } from "./reducer";
import { SystemTableActionType, SystemTableAction } from "./types";

export const updateAction = (systemDatas: systemData[]): SystemTableAction => {
  return {
    type: SystemTableActionType.update,
    data: systemDatas,
  }
}

export const sortAction = (systemDatas: systemData[], orderBy: keyof systemData, sortDirection: Exclude<SortDirection, boolean>): SystemTableAction => {
  return {
    type: SystemTableActionType.sort,
    sortData: systemDatas,
    sortElement: {
      orderBy: orderBy,
      sortDirection: sortDirection
    }
  }
}

export const pagingAction = (nextPage: number): SystemTableAction => {
  return {
    type: SystemTableActionType.paging,
    nextPage: nextPage
  }
}