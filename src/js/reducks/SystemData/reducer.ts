import { SystemTableState, SystemTableAction, SystemTableActionType } from "./types"
import { Reducer } from "redux";
import { updateAction } from "./action";
import { initialSystemData } from "appConfig";

export const initialState: SystemTableState = {
  data: [initialSystemData],
  columnDisplayName: {
    system_id: "ID",
    system_name: "システム名",
    system_en_name: "システム英名",
  },
  sortData: [initialSystemData],
  sortElement: {
    orderBy: "system_id",
    sortDirection: "desc"
  },
  pageElement: {
    nowPage: 0,
    recordPerPage: 25,
    pageCount: 0,
  },
}

export const systemDataReducer: Reducer<SystemTableState, SystemTableAction> = (state = initialState, action): SystemTableState => {

  switch (action.type) {
    case SystemTableActionType.update:
      return {
        ...state,
        data: action.data,
        pageElement: {
          ...state.pageElement,
          nowPage: 0
        }
      }
    case SystemTableActionType.sort:
      return {
        ...state,
        sortData: action.sortData,
        sortElement: action.sortElement,
      }

    case SystemTableActionType.paging:
      return {
        ...state,
        pageElement: {
          ...state.pageElement,
          nowPage: action.nextPage
        }
      }
    default:
      const _: never = action
      return state
  }
}