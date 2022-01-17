import { sortAction, updateAction } from "./action"
import { ThunkAction } from "redux-thunk"
import { MachineTableActionType } from "./types"
import { RootStateType } from "reducks/store"
import { appConfig, machineData, MachinesAPI } from "appConfig"
import { SortDirection } from "@material-ui/core"
import { initialState } from "./reducer"


export const updateMachineDatas = (): ThunkAction<Promise<void>, RootStateType, undefined, MachineTableActionType> => {
  return async (dispatch, getState) => {
    let machineDatas: machineData[] = []

    await appConfig.axios.get<machineData[]>(MachinesAPI.root)
      .then(res => {
        machineDatas = res.data as machineData[]
        dispatch(updateAction(machineDatas))
      }
      )
      .catch(error =>
        console.error(error)
      )

  }
}

export const sortMachineDatas = (targetColumn: keyof machineData = "machine_id", updateFlg: boolean = false)
  : AppThunkAction<MachineTableActionType> => {

  return async (dispatch, getState) => {
    const sortState = getState().machineData.sortElement
    const datas = getState().machineData.data

    // 次状態を現在のstateで初期化
    const nextSortState = initialState.sortElement
    // ソート規則のオブジェクト
    const sortRule = {
      "asc": [1, -1],
      "desc": [-1, 1],
    }

    // カラムが同じならソート順を入れ替え（データ更新時は無視）
    if (sortState.orderBy === targetColumn && !updateFlg) {
      switch (sortState.sortDirection) {
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
    const sortDatas = datas.slice().sort((a, b) => {
      if (a[targetColumn] < b[targetColumn])
        return sortRule[nextSortState.sortDirection][0]
      else if (a[targetColumn] > b[targetColumn])
        return sortRule[nextSortState.sortDirection][1]
      else
        return 0
    })

    dispatch(sortAction(sortDatas, nextSortState.orderBy, nextSortState.sortDirection))
  }
}
import { AppThunkAction } from "reducks/store"
export const sortMachineDatas2 = (targetColumn: keyof machineData = "machine_id", updateFlg: boolean = false)
  : AppThunkAction<MachineTableActionType> => {

  return async (dispatch, getState) => {
    type sortObject = {
      sortDirection: Exclude<SortDirection, boolean>,
      orderBy: keyof machineData
    }
    const initSortState: sortObject = {
      orderBy: "machine_id",
      sortDirection: "desc",
    }

    const sortState = getState().machineData.sortElement === undefined ? initSortState : getState().machineData.sortElement
    const datas = getState().machineData.data === undefined ? [] : getState().machineData.data

    if (datas.length === 0)
      return



    // 次状態を現在のstateで初期化
    const nextSortState: sortObject = initSortState
    // ソート規則のオブジェクト
    const sortRule = {
      "asc": [1, -1],
      "desc": [-1, 1],
    }

    // カラムが同じならソート順を入れ替え（データ更新時は無視）
    if (sortState.orderBy === targetColumn && !updateFlg) {
      switch (sortState.sortDirection) {
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
    const sortDatas = datas.slice().sort((a, b) => {
      if (a[targetColumn] < b[targetColumn])
        return sortRule[nextSortState.sortDirection][0]
      else if (a[targetColumn] > b[targetColumn])
        return sortRule[nextSortState.sortDirection][1]
      else
        return 0
    })

    dispatch(sortAction(sortDatas, nextSortState.orderBy, nextSortState.sortDirection))
  }
}