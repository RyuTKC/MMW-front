import { ProductTableStateType, ProductTableActionType, ProductTableActionKind } from "./types"
import { Reducer } from "redux";
import { updateAction } from "./action";

export const initialState: ProductTableStateType = {
  data: [],
  columnDisplayName: {
    product_id: "ID",
    product_name: "製品名",
    model_number: "型番",
    prod_type: "機材タイプ",
    company_id: "メーカー",
    created_at: "登録日",
    updated_at: "更新日"
  },
  sortData: [],
  sortElement: {
    orderBy: "product_id",
    sortDirection: "desc"
  },
  pageElement: {
    nowPage: 0,
    recordPerPage: 25,
    pageCount: 0,
  },
}

export const productDataReducer: Reducer<ProductTableStateType, ProductTableActionType> = (state = initialState, action): ProductTableStateType => {

  switch (action.type) {
    case ProductTableActionKind.update:
      return {
        ...state,
        data: action.data,
        pageElement: {
          ...state.pageElement,
          nowPage: 0
        }
      }
    case ProductTableActionKind.sort:
      return {
        ...state,
        sortData: action.sortData,
        sortElement: action.sortElement,
      }

    case ProductTableActionKind.paging:
      return {
        ...state,
        pageElement: {
          ...state.pageElement,
          nowPage: action.nextPage
        }
      }
    default:
      const _: never = action
      return state
  }
}