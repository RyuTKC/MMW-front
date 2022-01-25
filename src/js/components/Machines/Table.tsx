import React, { useState, useEffect, useRef, useContext } from "react";
import styled from "styled-components";
import MTable from "@material-ui/core/Table";
import MTableBody from "@material-ui/core/TableBody";
import MTableHead from "@material-ui/core/TableHead";
import MTableRow from "@material-ui/core/TableRow";
import MTableCell from "@material-ui/core/TableCell";
import MTablePageNation from "@material-ui/core/TablePagination";
import MTableFooter from "@material-ui/core/TableFooter";
import MTableContainer from "@material-ui/core/TableContainer";
import { RootState } from "reducks/store";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import TitleColumn from "./TitleColumn";
import { pagingAction } from "reducks/MachineData/action";
import { machineData } from "appConfig";
import { getMachineData } from "reducks/MachineData/operations";


type Props = {
  className?: string
}

const MyTable = ({ className }: Props) => {
  // redux hooks
  const dispatch = useDispatch()
  const sortDataState = useSelector((state: RootState) => state.machineData.tableData.sortData, shallowEqual)
  const pageDataState = useSelector((state: RootState) => state.machineData.tableData.pageElement, shallowEqual)
  const columnDataState = useSelector((state: RootState)=> state.machineData.tableData.columnDisplayName, shallowEqual)

  const paging = (e: unknown, newPage: number) => {
    dispatch(pagingAction(newPage))
    window.scrollTo(0, 0)
  }

  const onClickRecord = (machine_id: number) => (e: React.MouseEvent<unknown>) => {
    dispatch(getMachineData(machine_id))
  }

  return (
    <>
      <MTableContainer>
        <MTable className={className}>
          <MTableHead>
            <MTableRow>
              <TitleColumn sortKey={"machine_id"}>{columnDataState.machine_id}</TitleColumn>
              <TitleColumn sortKey={"machine_name"}>{columnDataState.machine_name}</TitleColumn>
              <TitleColumn sortKey={"host_name"}>{columnDataState.host_name}</TitleColumn>
              <TitleColumn sortKey={"administrator"}>{columnDataState.administrator}</TitleColumn>
              <TitleColumn sortKey={"place"}>{columnDataState.place}</TitleColumn>
              <TitleColumn sortKey={"serial_number"}>{columnDataState.serial_number}</TitleColumn>
              <TitleColumn sortKey={"product_id"}>{columnDataState.product_id}</TitleColumn>
              <TitleColumn sortKey={"assurance"}>{columnDataState.assurance}</TitleColumn>
              <TitleColumn sortKey={"vender_id"}>{columnDataState.vender_id}</TitleColumn>
              <TitleColumn sortKey={"notes"}>{columnDataState.notes}</TitleColumn>
              <TitleColumn sortKey={"maintenance_date"}>{columnDataState.maintenance_date}</TitleColumn>
            </MTableRow>
          </MTableHead>
          <MTableBody>
            {sortDataState.slice((pageDataState.nowPage) * pageDataState.recordPerPage, (pageDataState.nowPage + 1) * pageDataState.recordPerPage).map((v, i) => {
              return (
                <MTableRow className={"tableRow"} key={i} onClick={onClickRecord(v.machine_id)}>
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
          <MTableFooter>
            <MTableRow>
              <MTablePageNation count={sortDataState.length} onPageChange={paging} page={pageDataState.nowPage} rowsPerPage={pageDataState.recordPerPage} />
            </MTableRow>
          </MTableFooter>
        </MTable>
      </MTableContainer>
    </>
  );
};

export default styled(MyTable)`
  width: 75%;
  color: #42a5f5;
  
  th, td{
    font-size: 12px;
    
  }

  & .tableRow:hover{
    cursor: pointer;
    background-color: rgba(30, 184, 223, 0.176);
  }

   @media (max-width: 640px){
    font-size: 32px;
    color: #444444;
  }
  @media print{
    font-size: 32px;
    color: #444444;
  
}
`