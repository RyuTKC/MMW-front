import { sortAction, updateAction } from "./action"
import { ThunkAction } from "redux-thunk"
import { MachineTableActionType } from "./types"
import { RootStateType } from "reducks/store"
import { AppThunkAction } from "reducks/store"
import { appConfig, machineData, MachinesAPI } from "appConfig"
import { SortDirection } from "@material-ui/core"
import { initialState } from "./reducer"
import { ActionCreator } from "redux"

export const updateMachineDatas = (): AppThunkAction<MachineTableActionType> => {
  return async (dispatch, getState) => {
    let machineDatas: machineData[] = []
    const machinDataState= getState().machineData
    const sortElement= machinDataState.sortElement

    await appConfig.axios.get<machineData[]>(MachinesAPI.root)
      .then(res => {
        machineDatas = res.data as machineData[]
        dispatch(updateAction(machineDatas))
        dispatch(sortMachineDatas(sortElement.orderBy, true))
      }
      )
      .catch(error =>
        console.error(error)
      )

  }
}

export const sortMachineDatas = (targetColumn: keyof machineData, updateFlg: boolean = false)
  : AppThunkAction<MachineTableActionType> => {

  return async (dispatch, getState) => {

    const sortState = getState().machineData.sortElement
    const datas = getState().machineData.data

    if (datas.length === 0)
      return



    // 次状態を現在のstateで初期化
    const nextSortState = sortState
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

export const pagingTable= (): AppThunkAction<MachineTableActionType>=>{
  return async()=>{
    
  }
}