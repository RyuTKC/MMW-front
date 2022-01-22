import React, { ReactNode } from "react";
import MTableCell from "@material-ui/core/TableCell";
import MTableSortLabel from "@material-ui/core/TableSortLabel";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducks/store";
import { systemData } from "appConfig";
import { sortsystemDatas } from "reducks/SystemData/operations";


type Props = {
  sortKey: keyof systemData,
  children: ReactNode
}

export default ({ sortKey, children }: Props) => {
  const dispatch = useDispatch()
  const systemDataState = useSelector((state: RootState) => state.systemData)
  const sortElement = systemDataState.sortElement

  //イベント
  const clickSort = (targetColumn: keyof systemData) => (e: React.MouseEvent) => {
    dispatch(sortsystemDatas(targetColumn, false))
  }
  return (
    <MTableCell
      sortDirection={sortElement.orderBy === sortKey ? sortElement.sortDirection : false}
    >
      <MTableSortLabel
        active={sortElement.orderBy === sortKey}
        direction={sortElement.orderBy === sortKey ? sortElement.sortDirection : undefined}
        onClick={clickSort(sortKey as keyof systemData)}
      >
        {children}
      </MTableSortLabel>
    </MTableCell>
  )
}