import React, { useState, useEffect, } from "react";
import styled from "styled-components";
import MTableRow from "@material-ui/core/TableRow";
import MTableCell from "@material-ui/core/TableCell";
import CancelIcon from "@material-ui/icons/Cancel"
import { RootState } from "reducks/store";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { editDataAction, setCompanyAction } from "reducks/Companies/action";
import { CircularProgress as MCircularProgress, IconButton, MenuItem as MMenuItem, Select as MSelect, TextField as MTextField } from "@material-ui/core";
import { initialCompanyData } from "appConfig";
import { SubmitButton } from "./SubmitButton";


type Props = {
  className?: string
}

const MyTable = ({ className }: Props) => {
  // redux hooks
  const dispatch = useDispatch()
  const companyId = useSelector((state: RootState) => state.companies.editElement.data.company_id, shallowEqual)
  const companyName = useSelector((state: RootState) => state.companies.editElement.data.company_name, shallowEqual)

  const nameChange = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(editDataAction(e.target.value, "company_name"))
  }

  const onCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setCompanyAction(initialCompanyData, false))
    e.preventDefault()
  }

  return (
    <MTableRow className={"tableRow"} >
      <MTableCell>{companyId}</MTableCell>
      <MTableCell>
        <MTextField defaultValue={companyName} variant="outlined" onBlur={nameChange} />
      </MTableCell>
      <SubmitButton />
      <IconButton onClick={onCancel}>
        <CancelIcon></CancelIcon>
      </IconButton>
    </MTableRow>
  )
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