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
import { RootState } from "reducks/store";
import { useDispatch, useSelector } from "react-redux";
import TitleColumn from "./TitleColumn";
import { pagingAction } from "reducks/SystemData/action";
import { sortsystemDatas, updatesystemDatas } from "reducks/SystemData/operations";


type Props = {
  className?: string
}

const MyTable = ({ className }: Props) => {
  // redux hooks
  const dispatch = useDispatch()
  const systemDataState = useSelector((state: RootState) => state.systemData)
  const columnData = systemDataState.columnDisplayName
  const sortData = systemDataState.sortData
  const pageData = systemDataState.pageElement

  const paging = (e: unknown, newPage: number) => {
    dispatch(pagingAction(newPage))
  }

  // リロード更新
  useEffect(() => {
    dispatch(updatesystemDatas())
    dispatch(sortsystemDatas("system_id"))
  }, [])

  return (
    <>
      <MTableContainer>
        <MTable className={className}>
          <MTableHead>
            <MTableRow>
              <TitleColumn sortKey={"system_id"}>{columnData.system_id}</TitleColumn>
              <TitleColumn sortKey={"system_name"}>{columnData.system_name}</TitleColumn>
              <TitleColumn sortKey={"system_en_name"}>{columnData.system_en_name}</TitleColumn>
            </MTableRow>
          </MTableHead>
          <MTableBody>
            {sortData.slice((pageData.nowPage) * pageData.recordPerPage, (pageData.nowPage + 1) * pageData.recordPerPage).map((v, i) => {
              return (
                <MTableRow key={i} onClick={() => { }}>
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
  font-size: 16px;
  color: #42a5f5;
  
  /* @media (max-width: 640px){
    font-size: 32px;
    color: #444444;
  }
  @media print{
    font-size: 32px;
    color: #444444;
  
} */
`