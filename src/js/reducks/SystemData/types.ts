import { SortDirection } from "@material-ui/core";
import { systemData } from "appConfig";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

// State Type
type SystemTableState = {
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
const SystemTableActionType = {
	update: "UPDATE",
	sort: "SORT",
	paging: "PAGING"
} as const;
type SystemTableActionType = keyof typeof SystemTableActionType

// データ更新
type UpdateAction = Action<typeof SystemTableActionType.update> & {
	data: systemData[],
}

// データソート
type SortAction = Action<typeof SystemTableActionType.sort> & {
	sortData: systemData[],
	sortElement: {
		orderBy: keyof systemData,
		sortDirection: Exclude<SortDirection, boolean>
	}
}

// ページング関連アクション
type PagingAction = Action<typeof SystemTableActionType.paging>&{
	nextPage: number
}

// アクションタイプ統合
type SystemTableAction = UpdateAction | SortAction | PagingAction
export {
	type SystemTableState,
	type SystemTableAction,
	SystemTableActionType,
}