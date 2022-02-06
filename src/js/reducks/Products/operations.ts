import { sortProductAction, setProductsAction, setProductAction } from "./action"
import { ProductsAction } from "./types"
import { AppThunkAction } from "reducks/store"
import { appConfig, isCompanyData, isProductTypeData, productData, ProductsAPI } from "appConfig"
import { SortDirection } from "@material-ui/core"

export const getProducts = (): AppThunkAction<ProductsAction> => {
  return async (dispatch, getState) => {
    const orderBy = getState().products.tableData.sortElement.orderBy

    await appConfig.axios.get(ProductsAPI.root)
      .then(res => {
        const products = res.data.products as productData[]
        dispatch(setProductsAction(products))
        dispatch(sortProductDatas2(orderBy, true))
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

    if (targetColumn !== "manufacturer") {

    }


    const sortFunction = () => { }
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
    dispatch(sortProductAction(nextSortDatas, nextSortState.orderBy, nextSortState.sortDirection))
  }
}

export const sortProductDatas2 = (targetColumn: keyof productData, updateFlg: boolean = false)
  : AppThunkAction<ProductsAction> => {

  const sortFunction = (a: number | string, b: number | string, sortDirection: Exclude<SortDirection, boolean>): number => {

    switch (sortDirection) {
      case "asc":
        if (a < b)
          return -1
        else if (a > b)
          return 1
        else
          break;

      case "desc":
        if (a < b)
          return 1
        else if (a > b)
          return -1
        else
          break;

    }
    return 0
  }

  return async (dispatch, getState) => {
    const sortState = { ...getState().products.tableData.sortElement }
    const datas = [...getState().products.datas]

    // データが無い場合は終了
    if (datas.length === 0)
      return

    // 次状態を現在のstateで初期化
    const nextSortState = { ...sortState }

    // データ更新ならばソート順は変更しない
    switch (updateFlg) {
      case true:
        break;
      case false:
        if (sortState.orderBy === targetColumn) {
          switch (sortState.sortDirection) {
            case "asc":
              nextSortState.sortDirection = "desc"
              break;
            case "desc":
              nextSortState.sortDirection = "asc"
              break;
          }
        }
        // 別カラムを選ぶ場合は昇順にする
        else {
          nextSortState.orderBy = targetColumn
          nextSortState.sortDirection = "asc"
        }
        break;
    }

    const nextSortDatas = datas.sort((a, b) => {
      const typedA = a[targetColumn] === ("" || undefined || null) ? "-" : a[targetColumn]
      const typedB = b[targetColumn] === ("" || undefined || null) ? "-" : b[targetColumn]

      let targetA: string | number = 0;
      let targetB: string | number = 0

      switch (typeof typedA) {
        case "string":
        case "number":
          targetA = typedA
          targetB = typedB as typeof typedA
          break;
        case "object":
          console.log(typedA)
          if (isProductTypeData(typedA)) {
            targetA = typedA.product_type_name
            targetB = (typedB as typeof typedA).product_type_name
          }
          else if (isCompanyData(typedA)) {
            targetA = typedA.company_name
            targetB = (typedB as typeof typedA).company_name
          }
          break;
        default:
          return 0
      }

      return sortFunction(targetA, targetB, nextSortState.sortDirection)
    })

    dispatch(sortProductAction(nextSortDatas, nextSortState.orderBy, nextSortState.sortDirection))

  }
}

export const pagingTable = (): AppThunkAction<ProductsAction> => {
  return async () => {

  }
}