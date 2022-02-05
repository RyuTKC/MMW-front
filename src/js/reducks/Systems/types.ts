import { SortDirection } from "@material-ui/core";
import { systemData } from "appConfig";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

// State Type
type SystemsState = {
	// 今持っている最新のデータ
	datas: systemData[],

	editElement: {
		data: systemData,
		editFlg: boolean,
	}

	// テーブルのデータ
	tableData: {
		// ソートされたデータ
		sortData: systemData[],

		// カラムのデータ
		columnDisplayName: {
			// ソートに用いるカラム（データカラム）: 表示のデータ
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
}

// Action Type
const SystemsActionType = {
	setSystem: "SET_SYSTEM",
	setSystems: "SET_SYSTEMS",
	editSystem: "EDIT_SYSTEM",
	sortSystem: "SORT_SYSTEM",
	pagingSystem: "PAGING_SYSTEM"
} as const;
type SystemsActionType = keyof typeof SystemsActionType

// データ取得
type SetSystemAction = Action<typeof SystemsActionType.setSystem> & {
	data: systemData,
	editFlg: boolean,
}

// データ一覧取得
type SetSystemsAction = Action<typeof SystemsActionType.setSystems> & {
	data: systemData[],
}

// データ編集
type EditSystemAction = Action<typeof SystemsActionType.editSystem> & {
	data: systemData[keyof systemData],
	key: keyof systemData
}

// データソート
type SortAction = Action<typeof SystemsActionType.sortSystem> & {
	sortData: systemData[],
	sortElement: {
		orderBy: keyof systemData,
		sortDirection: Exclude<SortDirection, boolean>
	}
}

// ページング関連アクション
type PagingAction = Action<typeof SystemsActionType.pagingSystem> & {
	nextPage: number
}

// アクションタイプ統合
type SystemsAction = SetSystemAction | SetSystemsAction | EditSystemAction | SortAction | PagingAction
export {
	type SystemsState,
	type SystemsAction,
	SystemsActionType,
}