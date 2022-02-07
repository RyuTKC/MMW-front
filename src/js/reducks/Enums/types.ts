import { SortDirection } from "@material-ui/core";
import { roleData, statusData } from "appConfig";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

// State Type
type EnumsState = {
	// 今持っている最新のデータ
	statuses: statusData[],
	roles: roleData[]
}

// Action Type
const EnumsActionType = {
	setStatuses: "SET_STATUSES",
	setRoles: "SET_ROLES",
} as const;
type EnumsActionType = keyof typeof EnumsActionType

type SetStatusesAction = Action<typeof EnumsActionType.setStatuses> & {
	statuses: statusData[],
}

// データ一覧取得
type SetRolesAction = Action<typeof EnumsActionType.setRoles> & {
	roles: roleData[],
}


// アクションタイプ統合
type EnumsAction = SetStatusesAction | SetRolesAction

export {
	type EnumsState,
	type EnumsAction,
	EnumsActionType,
}