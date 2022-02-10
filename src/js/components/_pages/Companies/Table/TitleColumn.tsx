import React, { ReactNode } from "react";
import MTableCell from "@material-ui/core/TableCell";
import MTableSortLabel from "@material-ui/core/TableSortLabel";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducks/store";
import { companyData } from "appConfig";
import { sortCompanyDatas } from "reducks/Companies/operations";


type Props = {
  sortKey: keyof companyData,
  children: ReactNode
}

export default ({ sortKey, children }: Props) => {
  const dispatch = useDispatch()
  const sortElement = { ...useSelector((state: RootState) => state.companies.tableData.sortElement) }

  //イベント
  const clickSort = (targetColumn: keyof companyData) => (e: React.MouseEvent) => {
    dispatch(sortCompanyDatas(targetColumn, false))
  }
  return (
    <MTableCell
      sortDirection={sortElement.orderBy === sortKey ? sortElement.sortDirection : false}
    >
      <MTableSortLabel
        active={sortElement.orderBy === sortKey}
        direction={sortElement.orderBy === sortKey ? sortElement.sortDirection : undefined}
        onClick={clickSort(sortKey as keyof companyData)}
      >
        {children}
      </MTableSortLabel>
    </MTableCell>
  )
}