import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { MachineData, machineData, productData, systemData } from "appConfig";
import MTable from "@material-ui/core/Table";
import MTableBody from "@material-ui/core/TableBody";
import MTableHead from "@material-ui/core/TableHead";
import MTableRow from "@material-ui/core/TableRow";
import MTableCell from "@material-ui/core/TableCell";
import MTableSortLabel from "@material-ui/core/TableSortLabel"

const STable = styled.table`
  font-size: 16px;
  color: #42a5f5;
  @media (max-width: 640px){
    font-size: 32px;
    color: #444444;
  }
  @media print{
    font-size: 32px;
    color: #444444;
  }
  `

// type----------------------------------------------------
type datasType = (machineData | systemData | productData)[]
type dataType = machineData | systemData | productData
type sortType = "asc" | "desc"
type sortObject = {
  order: sortType,
  orderBy: keyof machineData
}
type Props = {
  datas: machineData[],
  updateFlg?: boolean
}

const MyTable = ({ datas = [] }: Props): JSX.Element => {
  //カラム
  const columns: (keyof machineData)[] = datas.length !== 0 ? (Object.keys(datas[0])) as (keyof machineData)[] : [];
  //ソート状態初期値
  const initSortState: sortObject = {
    orderBy: "machine_id",
    order: "desc",
  }
  const [sortState, setSortState] = useState<sortObject>(initSortState)
  const [sortDatas, setSortDatas] = useState<machineData[]>(datas)

  //datas変更時にもソート実行
  useEffect(() => columnSort(), [datas])

  //ソートクリックイベント
  const clickSort = (targetColumn: keyof machineData) => (e: React.MouseEvent) => {
    columnSort(targetColumn)
  }

  const columnSort = (targetColumn: keyof machineData= "machine_id"): void => {
    //次状態を現在のstateで初期化
    const nextSortState: sortObject = initSortState
    //ソート規則のオブジェクト
    const sortRule = {
      "asc": [1, -1],
      "desc": [-1, 1],
    }

    // カラムが同じならソート順を入れ替え
    if (sortState.orderBy === targetColumn) {
      switch (sortState.order) {
        case "asc":
          nextSortState.order = "desc"
          break;
        case "desc":
          nextSortState.order = "asc"
          break;
      }
    }
    else {
      nextSortState.orderBy = targetColumn
      nextSortState.order = "desc"
    }

    //ソート
    const sortDatas = datas.slice().sort((a, b) => {
      if (a[targetColumn] < b[targetColumn])
        return sortRule[nextSortState.order][0]
      else if (a[targetColumn] > b[targetColumn])
        return sortRule[nextSortState.order][1]
      else
        return 0
    })
    console.log("nextSortState: ", nextSortState)
    console.log("sortDatas: ", sortDatas)


    setSortState(nextSortState)
    setSortDatas(sortDatas)
  }

  return (
    <>
      <MTable>
        <MTableHead>
          <MTableRow>
            {columns.map((v, i) => (
              <React.Fragment key={i}>
                <MTableCell
                  sortDirection={sortState.orderBy === v ? sortState.order : false}
                >
                  <MTableSortLabel
                    active={sortState.orderBy === v}
                    direction={sortState.orderBy === v ? sortState.order : "asc"}
                    onClick={clickSort(v)}
                  >
                    {v}
                  </MTableSortLabel>
                </MTableCell>
              </React.Fragment>
            )
            )}
          </MTableRow>
        </MTableHead>
        <MTableBody>
          {sortDatas.map((v, i) => (
            <MTableRow key={i}>
              {Object.values(v).map((v2, i2) => (
                <MTableCell key={i2}>
                  {v2}
                </MTableCell>
              ))}
            </MTableRow>
          )
          )}
        </MTableBody>
      </MTable>
    </>
  );
}

export default MyTable