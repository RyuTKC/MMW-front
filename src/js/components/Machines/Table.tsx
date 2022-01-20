import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import MTable from "@material-ui/core/Table";
import MTableBody from "@material-ui/core/TableBody";
import MTableHead from "@material-ui/core/TableHead";
import MTableRow from "@material-ui/core/TableRow";
import MTableCell from "@material-ui/core/TableCell";
import MTablePageNation from "@material-ui/core/TablePagination";
import MTableFooter from "@material-ui/core/TableFooter";
import MTableContainer from "@material-ui/core/TableContainer";
import { RootStateType } from "reducks/store";
import { useDispatch, useSelector } from "react-redux";
import TitleColumn from "./TitleColumn";
import { pagingAction } from "reducks/MachineData/action";


type TableProps = {
  className?: string
}

const MyTable = ({ className }: TableProps) => {
  // redux hooks
  const dispatch = useDispatch()
  const machineDataState = useSelector((state: RootStateType) => state.machineData)
  const columnData = machineDataState.columnDisplayName
  const sortData = machineDataState.sortData
  const pageData = machineDataState.pageElement

  const paging = (e: unknown, newPage: number) => {
    dispatch(pagingAction(newPage))
    window.scrollTo(0, 0)
  }

  return (
    <>
      <MTableContainer>
        <MTable className={className}>
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
            {sortData.slice((pageData.nowPage) * pageData.recordPerPage, (pageData.nowPage + 1) * pageData.recordPerPage).map((v, i) => {
              return (
                <MTableRow key={i} onClick={() => { }}>
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
              <MTablePageNation count={sortData.length} onPageChange={paging} page={pageData.nowPage} rowsPerPage={pageData.recordPerPage} />
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

  /* @media (max-width: 640px){
    font-size: 32px;
    color: #444444;
  }
  @media print{
    font-size: 32px;
    color: #444444;
  
} */
`