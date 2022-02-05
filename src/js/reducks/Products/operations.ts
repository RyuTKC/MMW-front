import { sortAction, setProductsAction, setProductAction } from "./action"
import { ProductsAction } from "./types"
import { AppThunkAction } from "reducks/store"
import { appConfig, productData, ProductsAPI } from "appConfig"

export const getProducts = (): AppThunkAction<ProductsAction> => {
  return async (dispatch, getState) => {
    const orderBy = getState().products.tableData.sortElement.orderBy

    await appConfig.axios.get(ProductsAPI.root)
      .then(res => {
        console.log("とりきた")
        const products = res.data.products as productData[]
        dispatch(setProductsAction(products))
        dispatch(sortProductDatas(orderBy, true))
      }
      )
      .catch(error =>
        console.error(error)
      )
  }
}

export const getProduct = (product_id: number): AppThunkAction<ProductsAction> => {
  return async (dispatch, getState) => {

    appConfig.axios.get(ProductsAPI.root + `/${product_id}`)
      .then(res => {
        const productData = res.data.product as productData
        dispatch(setProductAction(productData, true))
      })
      .catch(e => {
        console.log(e)
      })
  }
}

export const sortProductDatas = (targetColumn: keyof productData, updateFlg: boolean = false)
  : AppThunkAction<ProductsAction> => {

  return async (dispatch, getState) => {
    const sortState = { ...getState().products.tableData.sortElement }
    const datas = [...getState().products.datas]


    if (datas.length === 0)
      return

    if (targetColumn !== "manufacturer"){

    }


    const sortFunction=()=>{}
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
    // console.log("ms: ", getState().machines.tableData.sortData)
    // console.log("ss: ", getState().products.tableData.sortData)
    dispatch(sortAction(nextSortDatas, nextSortState.orderBy, nextSortState.sortDirection))
  }
}

export const pagingTable = (): AppThunkAction<ProductsAction> => {
  return async () => {

  }
}