import { SortDirection } from "@material-ui/core";
import { systemData } from "appConfig";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

// State Type
type SystemTableStateType = {
	// 今持っている最新のデータ
	data: systemData[],
	// ソートされたデータ
	sortData: systemData[],

	// カラムのデータ
	columnDisplayName: {
		// ソートに用いるカラム（データカラム）
		[key in keyof systemData]: string
	},

	// ソート要素
	sortElement: {
		orderBy: keyof systemData,
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
const SystemTableActionKind = {
	update: "UPDATE",
	sort: "SORT",
	paging: "PAGING"
} as const;
type SystemTableActionKind = keyof typeof SystemTableActionKind

// データ更新
type UpdateActionType = Action<typeof SystemTableActionKind.update> & {
	data: systemData[],
}

// データソート
type SortActionType = Action<typeof SystemTableActionKind.sort> & {
	sortData: systemData[],
	sortElement: {
		orderBy: keyof systemData,
		sortDirection: Exclude<SortDirection, boolean>
	}
}

// ページング関連アクション
type PagingActionType = Action<typeof SystemTableActionKind.paging>&{
	nextPage: number
}

// アクションタイプ統合
type SystemTableActionType = UpdateActionType | SortActionType | PagingActionType
export {
	type SystemTableStateType,
	type SystemTableActionType,
	SystemTableActionKind,
}