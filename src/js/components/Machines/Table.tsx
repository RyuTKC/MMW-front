import React, { useState, useEffect, useRef } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { appConfig, MachineData, machineData, MachinesAPI, productData, systemData } from "appConfig";
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
type sortType = "asc" | "desc"
type sortObject = {
  order: sortType,
  orderBy: keyof machineData
}
//ソート状態初期値
const initSortState: sortObject = {
  orderBy: "machine_id",
  order: "desc",
}
type TableProps = {
  datas?: machineData[],
}

const MyTable = (): JSX.Element => {
  // 変数
  const [sortState, setSortState] = useState<sortObject>(initSortState)
  const [sortDatas, setSortDatas] = useState<machineData[]>([])
  const machineDatas= useRef<machineData[]>();
  const columns: (keyof machineData)[] = (Object.keys(new MachineData)) as (keyof machineData)[];
  
  // ライフサイクル
  useEffect(() => getDatas(), []);

  // 関数
  const getDatas = (): void => {
    appConfig.axios.get<machineData[]>(MachinesAPI.root)
      .then(res => {
        machineDatas.current= res.data as machineData[]
        columnSort(sortState.orderBy, true)
      }
      )
      .catch(error =>
        console.error(error)
      )
  }
  const columnSort = (targetColumn: keyof machineData = "machine_id", updateFlg: boolean = false): void => {
    //次状態を現在のstateで初期化
    const nextSortState: sortObject = initSortState
    //ソート規則のオブジェクト
    const sortRule = {
      "asc": [1, -1],
      "desc": [-1, 1],
    }

    // カラムが同じならソート順を入れ替え（データ更新時は無視）
    if (sortState.orderBy === targetColumn && !updateFlg) {
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
    const sortDatas = (machineDatas.current as machineData[]).slice().sort((a, b) => {
      if (a[targetColumn] < b[targetColumn])
        return sortRule[nextSortState.order][0]
      else if (a[targetColumn] > b[targetColumn])
        return sortRule[nextSortState.order][1]
      else
        return 0
    })
    setSortState(nextSortState)
    setSortDatas(sortDatas)
  }

  //イベント
  const clickSort = (targetColumn: keyof machineData) => (e: React.MouseEvent) => {
    columnSort(targetColumn)
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
              {Object.values(v).map((v2, i2) =>
              (
                <MTableCell key={i2}>
                  {v2}
                </MTableCell>
              )

              )
              }
            </MTableRow>
          )
          )}
        </MTableBody>
      </MTable>
    </>
  );
}

export default styled(MyTable)`
  &&&{
    
  }
  
`