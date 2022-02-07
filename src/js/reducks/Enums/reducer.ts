import { EnumsState, EnumsAction, EnumsActionType } from "./types"
import { Reducer } from "redux";
import { initialRoleData, initialStatusData } from "appConfig";

export const initialState: EnumsState = {
  statuses: [initialStatusData],
  roles: [initialRoleData]
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
      default:
        const _: never = action
        return state
  }
}