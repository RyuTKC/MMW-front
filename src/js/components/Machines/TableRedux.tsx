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
import { RootStateType } from "reducks/store";
import { useDispatch, useSelector } from "react-redux";
import { sortMachineDatas } from "reducks/MachineData/operations";

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
  datas: machineData[],
  updateFlg?: boolean,
}

// const MyTable = ({ datas = [], updateFlg = false }: TableProps): JSX.Element => {
const MyTable = (): JSX.Element => {
  // redux hooks
  const dispatch = useDispatch()
  const machineDataState = useSelector((state: RootStateType) => state.machineData)
  // local state
  const [columns, setColumns] = useState<(keyof machineData)[]>((Object.keys(new MachineData) as (keyof machineData)[]));

  // ライフサイクル (更新時の挙動)
  useEffect(
    () => {
      dispatch(sortMachineDatas(machineDataState.sortElement.orderBy, true))
    },
    [machineDataState.data]
  );

  //イベント
  const clickSort = (targetColumn: keyof machineData) => (e: React.MouseEvent) => {
    dispatch(sortMachineDatas(targetColumn, false))
  }

  return (
    <>
      <MTable>
        <MTableHead>
          <MTableRow>
            {columns.length !== 0 ? columns.map((v, i) => (
              <React.Fragment key={i}>
                <MTableCell
                  sortDirection={machineDataState.sortElement.orderBy === v ? machineDataState.sortElement.sortDirection : false}
                >
                  <MTableSortLabel
                    active={machineDataState.sortElement.orderBy === v}
                    direction={machineDataState.sortElement.orderBy === v ? machineDataState.sortElement.sortDirection : "asc"}
                    onClick={clickSort(v)}
                  >
                    {v}
                  </MTableSortLabel>
                </MTableCell>
              </React.Fragment>
            )
            ) : []}
          </MTableRow>
        </MTableHead>
        <MTableBody>
          {machineDataState.sortData.map((v, i) => (
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