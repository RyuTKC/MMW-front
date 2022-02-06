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
import { pagingProductAction } from "reducks/Products/action";
import { getProduct, sortProductDatas, getProducts } from "reducks/Products/operations";
import { CircularProgress as MCircularProgress } from "@material-ui/core";


type Props = {
  className?: string
}

const MyTable = ({ className }: Props) => {
  // redux hooks
  const dispatch = useDispatch()
  const sortData = [...useSelector((state: RootState) => state.products.tableData.sortData, shallowEqual)]
  const pageData = { ...useSelector((state: RootState) => state.products.tableData.pageElement, shallowEqual) }
  const columnData = { ...useSelector((state: RootState) => state.products.tableData.columnDisplayName, shallowEqual) }

  const paging = (e: unknown, newPage: number) => {
    dispatch(pagingProductAction(newPage))
    window.scrollTo(0, 0)
  }
  
  const onClickRecord = (product_id: number) => (e: React.MouseEvent<unknown>) => {
    dispatch(getProduct(product_id))
  }

  // 更新
  useEffect(() => {
    dispatch(getProducts())
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
              <TitleColumn sortKey={"product_id"}>{columnData.product_id}</TitleColumn>
              <TitleColumn sortKey={"product_name"}>{columnData.product_name}</TitleColumn>
              <TitleColumn sortKey={"product_type"}>{columnData.product_type}</TitleColumn>
              <TitleColumn sortKey={"manufacturer"}>{columnData.manufacturer}</TitleColumn>
              <TitleColumn sortKey={"model_number"}>{columnData.model_number}</TitleColumn>
            </MTableRow>
          </MTableHead>
          <MTableBody>
            {sortData.slice((pageData.nowPage) * pageData.recordPerPage, (pageData.nowPage + 1) * pageData.recordPerPage).map((v, i) => {
              return (
                <MTableRow className={"tableRow"} key={i} onClick={onClickRecord(v.product_id)}>
                  <MTableCell>{v.product_id}</MTableCell>
                  <MTableCell>{v.product_name}</MTableCell>
                  <MTableCell>{v.product_type.product_type_name}</MTableCell>
                  <MTableCell>{v.manufacturer.company_name}</MTableCell>
                  <MTableCell>{v.model_number}</MTableCell>
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