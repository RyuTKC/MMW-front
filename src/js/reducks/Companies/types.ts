import { SortDirection } from "@material-ui/core";
import { companyData } from "appConfig";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

// State Type
type CompaniesState = {
	// 今持っている最新のデータ
	datas: companyData[],

	editElement: {
		data: companyData,
		editFlg: boolean,
	}

	// テーブルのデータ
	tableData: {
		// ソートされたデータ
		sortData: companyData[],

		// カラムのデータ
		columnDisplayName: {
			// ソートに用いるカラム（データカラム）: 表示のデータ
			[key in keyof companyData]: string
		},

		// ソート要素
		sortElement: {
			orderBy: keyof companyData,
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
const CompaniesActionType = {
	setCompany: "SET_COMPANY",
	setCompanies: "SET_COMPANIES",
	editCompany: "EDIT_COMPANY",
	sortCompany: "SORT_COMPANY",
	pagingCompany: "PAGING_COMPANY"
} as const;
type CompaniesActionType = keyof typeof CompaniesActionType

// データ取得
type SetCompanyAction = Action<typeof CompaniesActionType.setCompany> & {
	data: companyData,
	editFlg: boolean,
}

// データ一覧取得
type SetCompaniesAction = Action<typeof CompaniesActionType.setCompanies> & {
	data: companyData[],
}

// データ編集
type EditCompanyAction = Action<typeof CompaniesActionType.editCompany> & {
	data: companyData[keyof companyData],
	key: keyof companyData
}

// データソート
type SortAction = Action<typeof CompaniesActionType.sortCompany> & {
	sortData: companyData[],
	sortElement: {
		orderBy: keyof companyData,
		sortDirection: Exclude<SortDirection, boolean>
	}
}

// ページング関連アクション
type PagingAction = Action<typeof CompaniesActionType.pagingCompany> & {
	nextPage: number
}

// アクションタイプ統合
type CompaniesAction = SetCompanyAction | SetCompaniesAction | EditCompanyAction | SortAction | PagingAction
export {
	type CompaniesState,
	type CompaniesAction,
	CompaniesActionType,
}