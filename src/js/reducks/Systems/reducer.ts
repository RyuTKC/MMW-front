import { SystemsState, SystemsAction, SystemsActionType } from "./types"
import { Reducer } from "redux";
import { initialSystemData } from "appConfig";

export const initialState: SystemsState = {
  datas: [initialSystemData],
  editElement: {
    data: initialSystemData,
    editFlg: false,
  },
  tableData: {
    sortData: [initialSystemData],
    columnDisplayName: {
      system_id: "ID",
      system_name: "システム名",
      system_en_name: "システム英名",
    },
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
}

export const systemsReducer: Reducer<SystemsState, SystemsAction> = (state = initialState, action): SystemsState => {

  switch (action.type) {
    case SystemsActionType.setSystem:
      return {
        ...state,

        editElement: {
          ...state.editElement,

          data: action.data,
          editFlg: action.editFlg
        }

      }
    case SystemsActionType.setSystems:
      return {
        ...state,

        datas: action.data,
        tableData: {
          ...state.tableData,

          pageElement: {
            ...state.tableData.pageElement,

            nowPage: 0
          }
        }

      }

    case SystemsActionType.editSystem:
      return {
        ...state,
        editElement: {
          ...state.editElement,

          data: {
            ...state.editElement.data,

            [action.key]: action.data
          }
        }
      }
    case SystemsActionType.sortSystem:
      return {
        ...state,

        tableData: {
          ...state.tableData,

          sortData: action.sortData,
          sortElement: action.sortElement,
        }
      }
    case SystemsActionType.pagingSystem:
      return {
        ...state,

        tableData: {
          ...state.tableData,

          pageElement: {
            ...state.tableData.pageElement,

            nowPage: action.nextPage
          }
        }
      }
    default:
      const _: never = action
      return state
  }
}