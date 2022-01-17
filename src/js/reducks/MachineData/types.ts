import { SortDirection } from "@material-ui/core";
import { MachineData, machineData } from "appConfig";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

// State Type
type MachineTableStateType = {
	// 今持っている最新のデータ
	data: machineData[],
	// ソートされたデータ
	sortData: machineData[]

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
}

// Action Type
const MachineTableActionKind = {
	update: "UPDATE",
	sort: "sort",
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

// アクションタイプ統合
type MachineTableActionType = UpdateActionType | SortActionType

export {
	type MachineTableStateType,
	type MachineTableActionType,
	MachineTableActionKind,
}