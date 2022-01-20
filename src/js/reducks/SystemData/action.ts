import { SortDirection } from "@material-ui/core";
import { systemData } from "appConfig";
import { Action, ActionCreator } from "redux";
import { initialState } from "./reducer";
import { SystemTableActionKind, SystemTableActionType } from "./types";

export const updateAction = (systemDatas: systemData[]): SystemTableActionType => {
  return {
    type: SystemTableActionKind.update,
    data: systemDatas,
  }
}

export const sortAction = (systemDatas: systemData[], orderBy: keyof systemData, sortDirection: Exclude<SortDirection, boolean>): SystemTableActionType => {
  return {
    type: SystemTableActionKind.sort,
    sortData: systemDatas,
    sortElement: {
      orderBy: orderBy,
      sortDirection: sortDirection
    }
  }
}

export const pagingAction = (nextPage: number): SystemTableActionType => {
  return {
    type: SystemTableActionKind.paging,
    nextPage: nextPage
  }
}