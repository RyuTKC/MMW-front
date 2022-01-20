import { SystemTableStateType, SystemTableActionType, SystemTableActionKind } from "./types"
import { Reducer } from "redux";
import { updateAction } from "./action";

export const initialState: SystemTableStateType = {
  data: [],
  columnDisplayName: {
    system_id: "ID",
    system_name: "システム名",
    system_en_name: "システム英名",
    created_at: "登録日",
    updated_at: "更新日"
  },
  sortData: [],
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

export const systemDataReducer: Reducer<SystemTableStateType, SystemTableActionType> = (state = initialState, action): SystemTableStateType => {

  switch (action.type) {
    case SystemTableActionKind.update:
      return {
        ...state,
        data: action.data,
        pageElement: {
          ...state.pageElement,
          nowPage: 0
        }
      }
    case SystemTableActionKind.sort:
      return {
        ...state,
        sortData: action.sortData,
        sortElement: action.sortElement,
      }

    case SystemTableActionKind.paging:
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