import { SortDirection } from "@material-ui/core";
import { initialCompanyData, companyData } from "appConfig";
import { Action, ActionCreator } from "redux";
import { initialState } from "./reducer";
import { CompaniesActionType, CompaniesAction } from "./types";

export const setCompanyAction = (companyData: companyData, editFlg: boolean): CompaniesAction => {
  return {
    type: CompaniesActionType.setCompany,
    data: {
      ...initialCompanyData,
      ...companyData
    },
    editFlg: editFlg,
  }
}

export const setCompaniesAction = (companyDatas: companyData[]): CompaniesAction => {
  return {
    type: CompaniesActionType.setCompanies,
    data: companyDatas,
  }
}

export const editDataAction= (targetData: companyData[keyof companyData], key: keyof companyData): CompaniesAction=>{
  return {
    type: CompaniesActionType.editCompany,
    data: targetData,
    key: key
  }
}


export const sortAction = (companyDatas: companyData[], orderBy: keyof companyData, sortDirection: Exclude<SortDirection, boolean>): CompaniesAction => {
  return {
    type: CompaniesActionType.sortCompany,
    sortData: companyDatas,
    sortElement: {
      orderBy: orderBy,
      sortDirection: sortDirection
    }
  }
}

export const pagingAction = (nextPage: number): CompaniesAction => {
  return {
    type: CompaniesActionType.pagingCompany,
    nextPage: nextPage
  }
}