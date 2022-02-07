import { SortDirection } from "@material-ui/core";
import { roleData, statusData } from "appConfig";
import { initialState } from "./reducer";
import { EnumsActionType, EnumsAction } from "./types";

export const setStatusesAction = (statuses: statusData[]): EnumsAction => {
  return {
    type: EnumsActionType.setStatuses,
    statuses: statuses
  }
}

export const setRolesAction = (roles: roleData[]): EnumsAction => {
  return {
    type: EnumsActionType.setRoles,
    roles: roles,
  }
}
