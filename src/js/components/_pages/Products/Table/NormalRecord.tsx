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
import FormRecord from "./FormRecord";
import { initialProductData, productData } from "appConfig";


type Props = {
  className?: string
  product: productData
}

const MyTable = ({ className, product = initialProductData }: Props) => {
  // redux hooks
  const dispatch = useDispatch()
  const onClickRecord = (product_id: number) => (e: React.MouseEvent<unknown>) => {
    dispatch(getProduct(product_id))
  }

  return (
    <MTableRow className={"tableRow"} onClick={onClickRecord(product.product_id)}>
      <MTableCell>{product.product_id}</MTableCell>
      <MTableCell>{product.product_name}</MTableCell>
      <MTableCell>{product.model_number}</MTableCell>
      <MTableCell>{product.product_type?.product_type_name}</MTableCell>
      <MTableCell>{product.manufacturer?.company_name}</MTableCell>
    </MTableRow>

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