import { SortDirection } from "@material-ui/core";
import { productTypeData, roleData, statusData } from "appConfig";
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

export const setProductTypesAction=(product_types: productTypeData[]): EnumsAction=>{
  return{
    type: EnumsActionType.setProductTypes,
    product_types: product_types
  }
}
