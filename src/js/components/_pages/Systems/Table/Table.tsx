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
import { pagingAction } from "reducks/Systems/action";
import { getSystem, sortSystemDatas, getSystems } from "reducks/Systems/operations";
import { CircularProgress as MCircularProgress } from "@material-ui/core";


type Props = {
  className?: string
}

const MyTable = ({ className }: Props) => {
  // redux hooks
  const dispatch = useDispatch()
  const sortData = [...useSelector((state: RootState) => state.systems.tableData.sortData, shallowEqual)]
  const pageData = { ...useSelector((state: RootState) => state.systems.tableData.pageElement, shallowEqual) }
  const columnData = { ...useSelector((state: RootState) => state.systems.tableData.columnDisplayName, shallowEqual) }

  const paging = (e: unknown, newPage: number) => {
    dispatch(pagingAction(newPage))
    window.scrollTo(0, 0)
  }
  
  const onClickRecord = (system_id: number) => (e: React.MouseEvent<unknown>) => {
    dispatch(getSystem(system_id))
  }

  // 更新
  useEffect(() => {
    dispatch(getSystems())
    dispatch(sortSystemDatas("system_id", false))
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
              <TitleColumn sortKey={"system_id"}>{columnData.system_id}</TitleColumn>
              <TitleColumn sortKey={"system_name"}>{columnData.system_name}</TitleColumn>
              <TitleColumn sortKey={"system_en_name"}>{columnData.system_en_name}</TitleColumn>
            </MTableRow>
          </MTableHead>
          <MTableBody>
            {sortData.slice((pageData.nowPage) * pageData.recordPerPage, (pageData.nowPage + 1) * pageData.recordPerPage).map((v, i) => {
              return (
                <MTableRow className={"tableRow"} key={i} onClick={onClickRecord(v.system_id)}>
                  <MTableCell>{v.system_id}</MTableCell>
                  <MTableCell>{v.system_name}</MTableCell>
                  <MTableCell>{v.system_en_name}</MTableCell>
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