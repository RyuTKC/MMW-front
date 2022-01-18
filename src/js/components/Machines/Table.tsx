import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import MTable from "@material-ui/core/Table";
import MTableBody from "@material-ui/core/TableBody";
import MTableHead from "@material-ui/core/TableHead";
import MTableRow from "@material-ui/core/TableRow";
import MTableCell from "@material-ui/core/TableCell";
import { RootStateType } from "reducks/store";
import { useDispatch, useSelector } from "react-redux";
import { sortMachineDatas } from "reducks/MachineData/operations";
import TitleColumn from "./TitleColumn";

const STable = styled.table`

  `

// type----------------------------------------------------

const MyTable = () => {
  // redux hooks
  const dispatch = useDispatch()
  const machineDataState = useSelector((state: RootStateType) => state.machineData)
  const columnData = machineDataState.columnDisplayName
  const sortData = machineDataState.sortData

  // ライフサイクル (更新時の挙動)
  useEffect(() => {
    dispatch(sortMachineDatas(machineDataState.sortElement.orderBy, true))
  }, [machineDataState.data]);

  return (
    <>
      <MTable>
        <MTableHead>
          <MTableRow>
            <TitleColumn sortKey={"machine_id"}>{columnData.machine_id}</TitleColumn>
            <TitleColumn sortKey={"machine_name"}>{columnData.machine_name}</TitleColumn>
            <TitleColumn sortKey={"host_name"}>{columnData.host_name}</TitleColumn>
            <TitleColumn sortKey={"administrator"}>{columnData.administrator}</TitleColumn>
            <TitleColumn sortKey={"place"}>{columnData.place}</TitleColumn>
            <TitleColumn sortKey={"serial_number"}>{columnData.serial_number}</TitleColumn>
            <TitleColumn sortKey={"product_id"}>{columnData.product_id}</TitleColumn>
            <TitleColumn sortKey={"assurance"}>{columnData.assurance}</TitleColumn>
            <TitleColumn sortKey={"vender_id"}>{columnData.vender_id}</TitleColumn>
            <TitleColumn sortKey={"notes"}>{columnData.notes}</TitleColumn>
            <TitleColumn sortKey={"maintenance_date"}>{columnData.maintenance_date}</TitleColumn>
          </MTableRow>
        </MTableHead>
        <MTableBody>
          {sortData.map((v, i) => {
            return (
              <MTableRow key={i}>
                <MTableCell>{v.machine_id}</MTableCell>
                <MTableCell>{v.machine_name}</MTableCell>
                <MTableCell>{v.host_name}</MTableCell>
                <MTableCell>{v.administrator}</MTableCell>
                <MTableCell>{v.place}</MTableCell>
                <MTableCell>{v.serial_number}</MTableCell>
                <MTableCell>{v.product_id}</MTableCell>
                <MTableCell>{v.assurance}</MTableCell>
                <MTableCell>{v.vender_id}</MTableCell>
                <MTableCell>{v.notes}</MTableCell>
                <MTableCell>{v.maintenance_date}</MTableCell>
              </MTableRow>
            )
          }
          )}
        </MTableBody>
      </MTable>
    </>
  );
}

export default styled(MyTable)`
  
  width: 75%;
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