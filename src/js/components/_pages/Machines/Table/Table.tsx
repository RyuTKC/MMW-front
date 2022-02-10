import React, { useState, useEffect, } from "react";
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
import { pagingMachineAction } from "reducks/Machines/action";
import { getMachine, getMachines, sortMachineDatas } from "reducks/Machines/operations";
import { CircularProgress as MCircularProgress } from "@material-ui/core";


type Props = {
  className?: string
}

const MyTable = ({ className }: Props) => {
  // redux hooks
  const dispatch = useDispatch()
  
  const sortData = [...useSelector((state: RootState) => state.machines.tableData.sortData, shallowEqual)]
  const pageData = { ...useSelector((state: RootState) => state.machines.tableData.pageElement, shallowEqual) }
  const columnData = { ...useSelector((state: RootState) => state.machines.tableData.columnDisplayName, shallowEqual) }
  const paging = (e: unknown, newPage: number) => {
    dispatch(pagingMachineAction(newPage))
    window.scrollTo(0, 0)
  }

  const onClickRecord = (machine_id: number) => (e: React.MouseEvent<unknown>) => {
    dispatch(getMachine(machine_id))
  }
  // 更新
  useEffect(() => {
    dispatch(getMachines())
  }, []);
  
  return (
    <>
      <MTableContainer>
        <MTable className={className}>
          <MTableHead>
            <MTableRow>
              <MTablePageNation count={sortData.length} onPageChange={paging} page={pageData.nowPage} rowsPerPage={pageData.recordPerPage} />
            </MTableRow>
            <MTableRow>
              <TitleColumn sortKey={"systems"}>{columnData.systems}</TitleColumn>
              <TitleColumn sortKey={"machine_id"}>{columnData.machine_id}</TitleColumn>
              <TitleColumn sortKey={"machine_name"}>{columnData.machine_name}</TitleColumn>
              <TitleColumn sortKey={"host_name"}>{columnData.host_name}</TitleColumn>
              <TitleColumn sortKey={"administrator"}>{columnData.administrator}</TitleColumn>
              <TitleColumn sortKey={"place"}>{columnData.place}</TitleColumn>
              <TitleColumn sortKey={"serial_number"}>{columnData.serial_number}</TitleColumn>
              <TitleColumn sortKey={"product"}>{columnData.product}</TitleColumn>
              <TitleColumn sortKey={"assurance"}>{columnData.assurance}</TitleColumn>
              <TitleColumn sortKey={"vender"}>{columnData.vender}</TitleColumn>
              <TitleColumn sortKey={"notes"}>{columnData.notes}</TitleColumn>
              <TitleColumn sortKey={"updated_at"}>{columnData.updated_at}</TitleColumn>
            </MTableRow>
          </MTableHead>
          <MTableBody>
            {sortData.slice((pageData.nowPage) * pageData.recordPerPage, (pageData.nowPage + 1) * pageData.recordPerPage).map((v, i) => {
              return (
                <MTableRow className={"tableRow"} key={i} onClick={onClickRecord(v.machine_id)}>
                  <MTableCell>{v.systems.find(v=> v.main_flg)?.system_name}</MTableCell>
                  <MTableCell>{v.machine_id}</MTableCell>
                  <MTableCell>{v.machine_name}</MTableCell>
                  <MTableCell>{v.host_name}</MTableCell>
                  <MTableCell>{v.administrator}</MTableCell>
                  <MTableCell>{v.place}</MTableCell>
                  <MTableCell>{v.serial_number}</MTableCell>
                  <MTableCell>{v.product?.product_name}</MTableCell>
                  <MTableCell>{v.assurance}</MTableCell>
                  <MTableCell>{v.vender?.company_name}</MTableCell>
                  <MTableCell>{v.notes}</MTableCell>
                  <MTableCell>{v.updated_at.toString()}</MTableCell>
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