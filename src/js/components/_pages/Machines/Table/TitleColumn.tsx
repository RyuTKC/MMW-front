import React, { ReactNode } from "react";
import MTableCell from "@material-ui/core/TableCell";
import MTableSortLabel from "@material-ui/core/TableSortLabel";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducks/store";
import { machineData } from "appConfig";
import { sortMachineDatas } from "reducks/Machines/operations";


type Props = {
  sortKey: keyof machineData,
  children: ReactNode
}

export default ({ sortKey, children }: Props) => {
  const dispatch = useDispatch()
  const sortElement = { ...useSelector((state: RootState) => state.machines.tableData.sortElement) }

  //イベント
  const clickSort = (targetColumn: keyof machineData) => (e: React.MouseEvent) => {
    dispatch(sortMachineDatas(targetColumn, false))
  }

  return (
    <MTableCell
      sortDirection={sortElement.orderBy === sortKey ? sortElement.sortDirection : false}
    >
      <MTableSortLabel
        active={sortElement.orderBy === sortKey}
        direction={sortElement.orderBy === sortKey ? sortElement.sortDirection : undefined}
        onClick={clickSort(sortKey)}
      >
        {children}
      </MTableSortLabel>
    </MTableCell>
  )
}