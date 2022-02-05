import { SortDirection } from "@material-ui/core";
import { machineData } from "appConfig";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

// State Type
type MachinesState = {
	// 今持っている最新のデータ
	datas: machineData[],

	editElement: {
		data: machineData,
		modalFlg: boolean,
	}

	// テーブルのデータ
	tableData: {
		// ソートされたデータ
		sortData: machineData[],

		// カラムのデータ
		columnDisplayName: {
			// ソートに用いるカラム（データカラム）: 表示のデータ
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
}

// Action Type
const MachinesActionType = {
	setMachine: "SET_MACHINE",
	setMachines: "SET_MACHINES",
	editMachine: "EDIT_MACHINE",
	sortMachine: "SORT_MACHINE",
	pagingMachine: "PAGING_MACHINE"
} as const;
type MachinesActionType = keyof typeof MachinesActionType

// データ取得
type SetMachineAction = Action<typeof MachinesActionType.setMachine> & {
	data: machineData,
	modalFlg: boolean,
}

// データ一覧取得
type SetMachinesAction = Action<typeof MachinesActionType.setMachines> & {
	data: machineData[],
}

// データ編集
type EditMachineAction = Action<typeof MachinesActionType.editMachine> & {
	data: machineData[keyof machineData],
	key: keyof machineData
}

// データソート
type SortAction = Action<typeof MachinesActionType.sortMachine> & {
	sortData: machineData[],
	sortElement: {
		orderBy: keyof machineData,
		sortDirection: Exclude<SortDirection, boolean>
	}
}

// ページング関連アクション
type PagingAction = Action<typeof MachinesActionType.pagingMachine> & {
	nextPage: number
}

// アクションタイプ統合
type MachinesAction = SetMachineAction | SetMachinesAction | EditMachineAction | SortAction | PagingAction
export {
	type MachinesState,
	type MachinesAction,
	MachinesActionType,
}