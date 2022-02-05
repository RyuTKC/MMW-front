import { SortDirection } from "@material-ui/core";
import { productData } from "appConfig";
import { Action } from "redux";

// State Type
type ProductsState = {
	// 今持っている最新のデータ
	datas: productData[],

	editElement: {
		data: productData,
		editFlg: boolean,
	}

	// テーブルのデータ
	tableData: {
		// ソートされたデータ
		sortData: productData[],

		// カラムのデータ
		columnDisplayName: {
			// ソートに用いるカラム（データカラム）: 表示のデータ
			[key in keyof productData]: string
		},

		// ソート要素
		sortElement: {
			orderBy: keyof productData,
			sortDirection: Exclude<SortDirection, boolean>
		}

		// ページに関する要素
		pageElement: {
			// 現在のページ
			nowPage: number,
			// 表示している行数
			recordPerPage: number,
			// 総ページ数
			pageCount: number,
		}
	}
}

// Action Type
const ProductsActionType = {
	setProduct: "SET_PRODUCT",
	setProducts: "SET_PRODUCTS",
	editProduct: "EDIT_PRODUCT",
	sortProduct: "SORT_PRODUCT",
	pagingProduct: "PAGING_PRODUCT"
} as const;
type ProductsActionType = keyof typeof ProductsActionType

// データ取得
type SetProductAction = Action<typeof ProductsActionType.setProduct> & {
	data: productData,
	editFlg: boolean,
}

// データ一覧取得
type SetProductsAction = Action<typeof ProductsActionType.setProducts> & {
	data: productData[],
}

// データ編集
type EditProductAction = Action<typeof ProductsActionType.editProduct> & {
	data: productData[keyof productData],
	key: keyof productData
}

// データソート
type SortAction = Action<typeof ProductsActionType.sortProduct> & {
	sortData: productData[],
	sortElement: {
		orderBy: keyof productData,
		sortDirection: Exclude<SortDirection, boolean>
	}
}

// ページング関連アクション
type PagingAction = Action<typeof ProductsActionType.pagingProduct> & {
	nextPage: number
}

// アクションタイプ統合
type ProductsAction = SetProductAction | SetProductsAction | EditProductAction | SortAction | PagingAction
export {
	type ProductsState,
	type ProductsAction,
	ProductsActionType,
}