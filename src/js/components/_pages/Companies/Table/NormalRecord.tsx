import React, { useState, useEffect, } from "react";
import styled from "styled-components";
import MTableRow from "@material-ui/core/TableRow";
import MTableCell from "@material-ui/core/TableCell";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getCompany, sortCompanyDatas, getCompanies } from "reducks/Companies/operations";
import { CircularProgress as MCircularProgress } from "@material-ui/core";
import { initialCompanyData, companyData } from "appConfig";


type Props = {
  className?: string
  company: companyData
}

const MyTable = ({ className, company = initialCompanyData }: Props) => {
  // redux hooks
  const dispatch = useDispatch()
  const onClickRecord = (company_id: number) => (e: React.MouseEvent<unknown>) => {
    dispatch(getCompany(company_id))
  }

  return (
    <MTableRow className={"tableRow"} onClick={onClickRecord(company.company_id)}>
      <MTableCell>{company.company_id}</MTableCell>
      <MTableCell>{company.company_name}</MTableCell>
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