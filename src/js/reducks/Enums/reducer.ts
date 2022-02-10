import { EnumsState, EnumsAction, EnumsActionType } from "./types"
import { Reducer } from "redux";
import { initialProductTypeData, initialRoleData, initialStatusData } from "appConfig";

export const initialState: EnumsState = {
  statuses: [initialStatusData],
  roles: [initialRoleData],
  product_types: [initialProductTypeData]
}

export const enumsReducer: Reducer<EnumsState, EnumsAction> = (state = initialState, action): EnumsState => {

  switch (action.type) {
    case EnumsActionType.setStatuses:
      return {
        ...state,

        statuses: action.statuses
      }

    case EnumsActionType.setRoles:
      return {
        ...state,

        roles: action.roles
      }
      case EnumsActionType.setProductTypes:
        return {
          ...state,
          product_types: action.product_types
        }
    default:
      const _: never = action
      return state
  }
}