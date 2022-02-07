import { sortAction, setSystemsAction, setSystemAction } from "./action"
import { SystemsAction } from "./types"
import { AppThunkAction } from "reducks/store"
import { appConfig, systemData, SystemsAPI } from "appConfig"

export const getSystems = (): AppThunkAction<SystemsAction> => {
  return async (dispatch, getState) => {
    const orderBy = getState().systems.tableData.sortElement.orderBy

    await appConfig.axios.get(SystemsAPI.root)
      .then(res => {
        const systems = res.data.systems as systemData[]
        dispatch(setSystemsAction(systems))
        dispatch(sortSystemDatas(orderBy, true))
      }
      )
      .catch(error =>
        console.error(error)
      )
  }
}

export const getSystem = (system_id: number): AppThunkAction<SystemsAction> => {
  return async (dispatch, getState) => {

    appConfig.axios.get(SystemsAPI.root + `/${system_id}`)
      .then(res => {
        const systemData = res.data.system as systemData
        dispatch(setSystemAction(systemData, true))
      })
      .catch(e => {
        console.log(e)
      })
  }
}

export const sortSystemDatas = (targetColumn: keyof systemData, updateFlg: boolean = false)
  : AppThunkAction<SystemsAction> => {

  return async (dispatch, getState) => {
    const sortState = { ...getState().systems.tableData.sortElement }
    const datas = [...getState().systems.datas]
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

export const pagingTable = (): AppThunkAction<SystemsAction> => {
  return async () => {

  }
}