import { SortDirection } from "@material-ui/core";
import { productData } from "appConfig";
import { Action } from "redux";

// State Type
type ProductTableStateType = {
	// 今持っている最新のデータ
	data: productData[],
	// ソートされたデータ
	sortData: productData[],

	// カラムのデータ
	columnDisplayName: {
		// ソートに用いるカラム（データカラム）
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

// Action Type
const ProductTableActionKind = {
	update: "UPDATE",
	sort: "SORT",
	paging: "PAGING"
} as const;
type ProductTableActionKind = keyof typeof ProductTableActionKind

// データ更新
type UpdateActionType = Action<typeof ProductTableActionKind.update> & {
	data: productData[],
}

// データソート
type SortActionType = Action<typeof ProductTableActionKind.sort> & {
	sortData: productData[],
	sortElement: {
		orderBy: keyof productData,
		sortDirection: Exclude<SortDirection, boolean>
	}
}

// ページング関連アクション
type PagingActionType = Action<typeof ProductTableActionKind.paging>&{
	nextPage: number
}

// アクションタイプ統合
type ProductTableActionType = UpdateActionType | SortActionType | PagingActionType
export {
	type ProductTableStateType,
	type ProductTableActionType,
	ProductTableActionKind,
}