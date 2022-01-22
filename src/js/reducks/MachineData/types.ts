import { SortDirection } from "@material-ui/core";
import { machineData, machineData2 } from "appConfig";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

// State Type
type MachineTableState = {
	// 今持っている最新のデータ
	datas: machineData[],

	editElement: {
		data: machineData2,
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
const MachineTableActionType = {
	getData: "GET_DATA",
	editPost: "EDIT_POST",
	getDatas: "GET_DATAS",
	sort: "SORT",
	paging: "PAGING"
} as const;
type MachineTableActionType = keyof typeof MachineTableActionType

// データ取得
type GetDataAction = Action<typeof MachineTableActionType.getData> & {
	data: machineData2,
	modalFlg: boolean,
}

// 編集データPOST
type EditPostAction= Action<typeof MachineTableActionType.editPost> &{
	data: machineData,
}

// データ一覧取得
type GetDatasAction = Action<typeof MachineTableActionType.getDatas> & {
	data: machineData[],
}

// データソート
type SortAction = Action<typeof MachineTableActionType.sort> & {
	sortData: machineData[],
	sortElement: {
		orderBy: keyof machineData,
		sortDirection: Exclude<SortDirection, boolean>
	}
}

// ページング関連アクション
type PagingAction = Action<typeof MachineTableActionType.paging> & {
	nextPage: number
}

// アクションタイプ統合
type MachineTableAction = GetDataAction | GetDatasAction | SortAction | PagingAction | EditPostAction
export {
	type MachineTableState,
	type MachineTableAction,
	MachineTableActionType,
}