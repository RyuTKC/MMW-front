import { SortDirection } from "@material-ui/core";
import { initialProductData, productData } from "appConfig";
import { Action, ActionCreator } from "redux";
import { initialState } from "./reducer";
import { ProductsActionType, ProductsAction } from "./types";

export const setProductAction = (productData: productData, editFlg: boolean): ProductsAction => {
  return {
    type: ProductsActionType.setProduct,
    data: {
      ...initialProductData,
      ...productData
    },
    editFlg: editFlg,
  }
}

export const setProductsAction = (productDatas: productData[]): ProductsAction => {
  return {
    type: ProductsActionType.setProducts,
    data: productDatas,
  }
}

export const editDataAction= (targetData: productData[keyof productData], key: keyof productData): ProductsAction=>{
  return {
    type: ProductsActionType.editProduct,
    data: targetData,
    key: key
  }
}


export const sortAction = (productDatas: productData[], orderBy: keyof productData, sortDirection: Exclude<SortDirection, boolean>): ProductsAction => {
  return {
    type: ProductsActionType.sortProduct,
    sortData: productDatas,
    sortElement: {
      orderBy: orderBy,
      sortDirection: sortDirection
    }
  }
}

export const pagingAction = (nextPage: number): ProductsAction => {
  return {
    type: ProductsActionType.pagingProduct,
    nextPage: nextPage
  }
}