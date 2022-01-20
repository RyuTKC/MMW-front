import { SortDirection } from "@material-ui/core";
import { machineData } from "appConfig";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

// State Type
type MachineTableStateType = {
	// 今持っている最新のデータ
	data: machineData[],
	// ソートされたデータ
	sortData: machineData[],

	// カラムのデータ
	columnDisplayName: {
		// ソートに用いるカラム（データカラム）
		[key in keyof machineData]: string
	},

	// ソート要素
	sortElement: {
		orderBy: keyof machineData,
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
const MachineTableActionKind = {
	update: "UPDATE",
	sort: "SORT",
	paging: "PAGING"
} as const;
type MachineTableActionKind = keyof typeof MachineTableActionKind

// データ更新
type UpdateActionType = Action<typeof MachineTableActionKind.update> & {
	data: machineData[],
}

// データソート
type SortActionType = Action<typeof MachineTableActionKind.sort> & {
	sortData: machineData[],
	sortElement: {
		orderBy: keyof machineData,
		sortDirection: Exclude<SortDirection, boolean>
	}
}

// ページング関連アクション
type PagingActionType = Action<typeof MachineTableActionKind.paging>&{
	nextPage: number
}

// アクションタイプ統合
type MachineTableActionType = UpdateActionType | SortActionType | PagingActionType
export {
	type MachineTableStateType,
	type MachineTableActionType,
	MachineTableActionKind,
}