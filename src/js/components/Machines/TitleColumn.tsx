import React, { ReactNode } from "react";
import MTableCell from "@material-ui/core/TableCell";
import MTableSortLabel from "@material-ui/core/TableSortLabel";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "reducks/store";
import { machineData } from "appConfig";
import { sortMachineDatas } from "reducks/MachineData/operations";


type ColumnProps = {
  sortKey: keyof machineData,
  children: ReactNode
}

export default ({ sortKey, children }: ColumnProps) => {
  const dispatch = useDispatch()
  const machineDataState = useSelector((state: RootStateType) => state.machineData)
  const sortElement = machineDataState.sortElement

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
        direction={sortElement.orderBy === sortKey ? sortElement.sortDirection : "asc"}
        onClick={clickSort(sortKey as keyof machineData)}
      >
        {children}
      </MTableSortLabel>
    </MTableCell>
  )
}