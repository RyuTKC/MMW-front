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
import { pagingAction } from "reducks/ProductData/action";


type TableProps = {
  className?: string
}

const MyTable = ({ className }: TableProps) => {
  // redux hooks
  const dispatch = useDispatch()
  const productDataState = useSelector((state: RootStateType) => state.productData)
  const columnData = productDataState.columnDisplayName
  const sortData = productDataState.sortData
  const pageData = productDataState.pageElement

  const paging = (e: unknown, newPage: number) => {
    dispatch(pagingAction(newPage))
  }
  
  return (
    <>
      <MTableContainer>
        <MTable className={className}>
          <MTableHead>
            <MTableRow>
              <TitleColumn sortKey={"product_id"}>{columnData.product_id}</TitleColumn>
              <TitleColumn sortKey={"product_name"}>{columnData.product_name}</TitleColumn>
              <TitleColumn sortKey={"model_number"}>{columnData.model_number}</TitleColumn>
              <TitleColumn sortKey={"prod_type"}>{columnData.prod_type}</TitleColumn>
              <TitleColumn sortKey={"company_id"}>{columnData.company_id}</TitleColumn>
            </MTableRow>
          </MTableHead>
          <MTableBody>
            {sortData.slice((pageData.nowPage) * pageData.recordPerPage, (pageData.nowPage + 1) * pageData.recordPerPage).map((v, i) => {
              return (
                <MTableRow key={i} onClick={()=>{}}>
                  <MTableCell>{v.product_id}</MTableCell>
                  <MTableCell>{v.product_name}</MTableCell>
                  <MTableCell>{v.model_number}</MTableCell>
                  <MTableCell>{v.prod_type}</MTableCell>
                  <MTableCell>{v.company_id}</MTableCell>
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