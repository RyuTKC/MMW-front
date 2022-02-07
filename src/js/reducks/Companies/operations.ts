import { sortAction, setCompaniesAction, setCompanyAction } from "./action"
import { CompaniesAction } from "./types"
import { AppThunkAction } from "reducks/store"
import { appConfig, companyData, CompaniesAPI } from "appConfig"

export const getCompanies = (): AppThunkAction<CompaniesAction> => {
  return async (dispatch, getState) => {
    const orderBy = getState().companies.tableData.sortElement.orderBy

    await appConfig.axios.get(CompaniesAPI.root)
      .then(res => {
        const companies = res.data.companies as companyData[]
        dispatch(setCompaniesAction(companies))
        dispatch(sortCompanyDatas(orderBy, true))
      }
      )
      .catch(error =>
        console.error(error)
      )
  }
}

export const getCompany = (company_id: number): AppThunkAction<CompaniesAction> => {
  return async (dispatch, getState) => {

    appConfig.axios.get(CompaniesAPI.root + `/${company_id}`)
      .then(res => {
        const companyData = res.data.company as companyData
        dispatch(setCompanyAction(companyData, true))
      })
      .catch(e => {
        console.log(e)
      })
  }
}

export const sortCompanyDatas = (targetColumn: keyof companyData, updateFlg: boolean = false)
  : AppThunkAction<CompaniesAction> => {

  return async (dispatch, getState) => {
    const sortState = { ...getState().companies.tableData.sortElement }
    const datas = [...getState().companies.datas]
    if (datas.length === 0)
      return

    // ソート規則のオブジェクト
    const sortRule = {
      "asc": [1, -1],
      "desc": [-1, 1],
    }

    const nextSortState = sortState
    // カラムが同じならソート順を入れ替え（データ更新時は無視）
    if (nextSortState.orderBy === targetColumn && !updateFlg) {
      switch (nextSortState.sortDirection) {
        case "asc":
          nextSortState.sortDirection = "desc"
          break;
        case "desc":
          nextSortState.sortDirection = "asc"
          break;
      }
    }
    else {
      nextSortState.orderBy = targetColumn
      nextSortState.sortDirection = "desc"
    }

    //ソート
    const nextSortDatas = datas.sort((a, b) => {
      if (a[targetColumn] < b[targetColumn])
        return sortRule[nextSortState.sortDirection][0]
      else if (a[targetColumn] > b[targetColumn])
        return sortRule[nextSortState.sortDirection][1]
      else
        return 0
    })
    dispatch(sortAction(nextSortDatas, nextSortState.orderBy, nextSortState.sortDirection))
  }
}

export const pagingTable = (): AppThunkAction<CompaniesAction> => {
  return async () => {

  }
}