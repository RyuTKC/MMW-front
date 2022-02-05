import { ProductsState, ProductsAction, ProductsActionType } from "./types"
import { Reducer } from "redux";
import { initialProductData } from "appConfig";

export const initialState: ProductsState = {
  datas: [initialProductData],
  editElement: {
    data: initialProductData,
    editFlg: false,
  },
  tableData: {
    sortData: [initialProductData],
    columnDisplayName: {
      product_id: "ID",
      product_name: "製品名",
      model_number: "型番",
      product_type: "機材型",
      manufacturer: "メーカー",
    },
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
}

export const productsReducer: Reducer<ProductsState, ProductsAction> = (state = initialState, action): ProductsState => {

  switch (action.type) {
    case ProductsActionType.setProduct:
      return {
        ...state,

        editElement: {
          ...state.editElement,

          data: action.data,
          editFlg: action.editFlg
        }

      }
    case ProductsActionType.setProducts:
      return {
        ...state,

        datas: action.data,
        tableData: {
          ...state.tableData,

          pageElement: {
            ...state.tableData.pageElement,

            nowPage: 0
          }
        }

      }

    case ProductsActionType.editProduct:
      return {
        ...state,
        editElement: {
          ...state.editElement,

          data: {
            ...state.editElement.data,

            [action.key]: action.data
          }
        }
      }
    case ProductsActionType.sortProduct:
      return {
        ...state,

        tableData: {
          ...state.tableData,

          sortData: action.sortData,
          sortElement: action.sortElement,
        }
      }
    case ProductsActionType.pagingProduct:
      return {
        ...state,

        tableData: {
          ...state.tableData,

          pageElement: {
            ...state.tableData.pageElement,

            nowPage: action.nextPage
          }
        }
      }
    default:
      const _: never = action
      return state
  }
}