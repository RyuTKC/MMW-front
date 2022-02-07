import { CompaniesState, CompaniesAction, CompaniesActionType } from "./types"
import { Reducer } from "redux";
import { initialCompanyData } from "appConfig";

export const initialState: CompaniesState = {
  datas: [initialCompanyData],
  editElement: {
    data: initialCompanyData,
    editFlg: false,
  },
  tableData: {
    sortData: [initialCompanyData],
    columnDisplayName: {
      company_id: "ID",
      company_name: "企業名",
    },
    sortElement: {
      orderBy: "company_id",
      sortDirection: "desc"
    },
    pageElement: {
      nowPage: 0,
      recordPerPage: 25,
      pageCount: 0,
    },
  }
}

export const companiesReducer: Reducer<CompaniesState, CompaniesAction> = (state = initialState, action): CompaniesState => {

  switch (action.type) {
    case CompaniesActionType.setCompany:
      return {
        ...state,

        editElement: {
          ...state.editElement,

          data: action.data,
          editFlg: action.editFlg
        }

      }
    case CompaniesActionType.setCompanies:
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

    case CompaniesActionType.editCompany:
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
    case CompaniesActionType.sortCompany:
      return {
        ...state,

        tableData: {
          ...state.tableData,

          sortData: action.sortData,
          sortElement: action.sortElement,
        }
      }
    case CompaniesActionType.pagingCompany:
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