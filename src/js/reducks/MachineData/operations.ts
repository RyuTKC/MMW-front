import { sortAction, updateAction } from "./action"
import { ThunkAction } from "redux-thunk"
import { MachineTableActionType, MachineTableStateType, MachineTableThunkActionType } from "./types"
import { RootStateType } from "reducks/store"
import { appConfig, machineData, MachinesAPI } from "appConfig"
import { SortDirection } from "@material-ui/core"

export const updateMachineDatas = (): ThunkAction<Promise<void>, RootStateType, undefined, MachineTableActionType> => {
  return async (dispatch, getState) => {
    let machineDatas: machineData[] = []

    appConfig.axios.get<machineData[]>(MachinesAPI.root)
      .then(res => {
        machineDatas = res.data as machineData[]
        console.log(machineDatas)
        dispatch(updateAction(machineDatas))
      }
      )
      .catch(error =>
        console.error(error)
      )

  }
}

export const sortMachineDatas = (targetColumn: keyof machineData = "machine_id", updateFlg: boolean = false)
  : MachineTableThunkActionType => {

  return async (dispatch, getState) => {
    const sortState = getState().sortElement
    const datas = getState().data

    type sortObject = {
      sortDirection: Exclude<SortDirection, boolean>,
      orderBy: keyof machineData
    }
    const initSortState: sortObject = {
      orderBy: "machine_id",
      sortDirection: "desc",
    }
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

export const sortMachineDatas2 = (targetColumn: keyof machineData = "machine_id", updateFlg: boolean = false)
  : MachineTableThunkActionType => {

  return async (dispatch, getState) => {
    const sortState = getState().sortElement
    const datas = getState().data
    console.log(sortState)
    console.log(datas)



    type sortObject = {
      sortDirection: Exclude<SortDirection, boolean>,
      orderBy: keyof machineData
    }
    const initSortState: sortObject = {
      orderBy: "machine_id",
      sortDirection: "desc",
    }
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