import React, { useState, useEffect, } from "react";
import styled from "styled-components";
import MTableRow from "@material-ui/core/TableRow";
import MTableCell from "@material-ui/core/TableCell";
import CancelIcon from "@material-ui/icons/Cancel"
import { RootState } from "reducks/store";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { editDataAction, setSystemAction } from "reducks/Systems/action";
import { CircularProgress as MCircularProgress, IconButton, MenuItem as MMenuItem, Select as MSelect, TextField as MTextField } from "@material-ui/core";
import { initialSystemData } from "appConfig";
import { SubmitButton } from "./SubmitButton";


type Props = {
  className?: string
}

const MyTable = ({ className }: Props) => {
  // redux hooks
  const dispatch = useDispatch()
  const systemId = useSelector((state: RootState) => state.systems.editElement.data.system_id, shallowEqual)
  const systemName = useSelector((state: RootState) => state.systems.editElement.data.system_name, shallowEqual)
  const systemEnName = useSelector((state: RootState) => state.systems.editElement.data.system_en_name, shallowEqual)

  const nameChange = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(editDataAction(e.target.value, "system_name"))
  }

  const enNameChange = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(editDataAction(e.target.value, "system_en_name"))
  }

  const onCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setSystemAction(initialSystemData, false))
    e.preventDefault()
  }

  return (
    <MTableRow className={"tableRow"} >
      <MTableCell>{systemId}</MTableCell>
      <MTableCell>
        <MTextField defaultValue={systemName} variant="outlined" onBlur={nameChange} />
      </MTableCell>
      <MTableCell>
        <MTextField defaultValue={systemEnName} variant="outlined" onBlur={enNameChange} />
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