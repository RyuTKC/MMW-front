import React, { ReactNode } from "react";
import MTableCell from "@material-ui/core/TableCell";
import MTableSortLabel from "@material-ui/core/TableSortLabel";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducks/store";
import { productData } from "appConfig";
import { sortProductDatas, sortProductDatas2 } from "reducks/Products/operations";


type Props = {
  sortKey: keyof productData,
  children: ReactNode
}

export default ({ sortKey, children }: Props) => {
  const dispatch = useDispatch()
  const sortElement = { ...useSelector((state: RootState) => state.products.tableData.sortElement) }

  //イベント
  const clickSort = (targetColumn: keyof productData) => (e: React.MouseEvent) => {
    dispatch(sortProductDatas2(targetColumn, false))
  }
  return (
    <MTableCell
      sortDirection={sortElement.orderBy === sortKey ? sortElement.sortDirection : false}
    >
      <MTableSortLabel
        active={sortElement.orderBy === sortKey}
        direction={sortElement.orderBy === sortKey ? sortElement.sortDirection : undefined}
        onClick={clickSort(sortKey as keyof productData)}
      >
        {children}
      </MTableSortLabel>
    </MTableCell>
  )
}