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

	// テーブルに入れるデータ群
	tableData: {
		// 表示するカラム
		displayColumns:{},
		// ソートに用いるカラム（データカラム）
		actualColumns: (keyof machineData)[]
		// ソートされたデータ
		sortData: machineData[]
	},

	// ソート要素
	sortElement: {
		orderBy: keyof machineData,
		sortDirection: Exclude<SortDirection, boolean>
	}
}

// Action Type
const MachineTableActionKind = {
	update: "UPDATE",
	sort: "sort",
} as const;
type MachineTableActionKind = keyof typeof MachineTableActionKind

// データ更新
type UpdateActionType = Action<typeof MachineTableActionKind.update> & {
	data: machineData[]
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
	MachineTableActionKind,
	type MachineTableActionType,
}