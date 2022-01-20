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

	// レコード数
	recordCount: number,

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
		// 表示しているデータ
		displayData: machineData[],
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
} as const;
type MachineTableActionKind = keyof typeof MachineTableActionKind

// データ更新
type UpdateActionType = Action<typeof MachineTableActionKind.update> & {
	data: machineData[],
	recordCount: number,
}

// データソート
type SortActionType = Action<typeof MachineTableActionKind.sort> & {
	sortData: machineData[],
	sortElement: {
		orderBy: keyof machineData,
		sortDirection: Exclude<SortDirection, boolean>
	}
}

// アクションタイプ統合
type MachineTableActionType = UpdateActionType | SortActionType
export {
	type MachineTableStateType,
	type MachineTableActionType,
	MachineTableActionKind,
}