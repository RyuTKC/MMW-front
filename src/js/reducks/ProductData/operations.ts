import { sortAction, updateAction } from "./action"
import { ThunkAction } from "redux-thunk"
import { ProductTableActionType } from "./types"
import { RootState } from "reducks/store"
import { AppThunkAction } from "reducks/store"
import { appConfig, productData, ProductsAPI } from "appConfig"
import { SortDirection } from "@material-ui/core"
import { initialState } from "./reducer"
import { ActionCreator } from "redux"

export const updateProductDatas = (): AppThunkAction<ProductTableActionType> => {
  return async (dispatch, getState) => {
    let productDatas: productData[] = []
    const machinDataState= getState().productData
    const sortElement= machinDataState.sortElement

    await appConfig.axios.get<productData[]>(ProductsAPI.root)
      .then(res => {
        productDatas = res.data as productData[]
        dispatch(updateAction(productDatas))
        dispatch(sortProductDatas(sortElement.orderBy, true))
      }
      )
      .catch(e =>
        console.error(e)
      )

  }
}

export const sortProductDatas = (targetColumn: keyof productData, updateFlg: boolean = false)
  : AppThunkAction<ProductTableActionType> => {

  return async (dispatch, getState) => {

    const sortState = getState().productData.sortElement
    const datas = getState().productData.data

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

export const pagingTable= (): AppThunkAction<ProductTableActionType>=>{
  return async()=>{
    
  }
}