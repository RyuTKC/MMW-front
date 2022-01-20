import { SortDirection } from "@material-ui/core";
import { productData } from "appConfig";
import { ProductTableActionKind, ProductTableActionType } from "./types";

export const updateAction = (productDatas: productData[]): ProductTableActionType => {
  return {
    type: ProductTableActionKind.update,
    data: productDatas,
  }
}

export const sortAction = (productDatas: productData[], orderBy: keyof productData, sortDirection: Exclude<SortDirection, boolean>): ProductTableActionType => {
  return {
    type: ProductTableActionKind.sort,
    sortData: productDatas,
    sortElement: {
      orderBy: orderBy,
      sortDirection: sortDirection
    }
  }
}

export const pagingAction = (nextPage: number): ProductTableActionType => {
  return {
    type: ProductTableActionKind.paging,
    nextPage: nextPage
  }
}