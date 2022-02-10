import React, { useState, useEffect, } from "react";
import styled from "styled-components";
import MTableRow from "@material-ui/core/TableRow";
import MTableCell from "@material-ui/core/TableCell";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getSystem, sortSystemDatas, getSystems } from "reducks/Systems/operations";
import { CircularProgress as MCircularProgress } from "@material-ui/core";
import { initialSystemData, systemData } from "appConfig";


type Props = {
  className?: string
  system: systemData
}

const MyTable = ({ className, system = initialSystemData }: Props) => {
  // redux hooks
  const dispatch = useDispatch()
  const onClickRecord = (system_id: number) => (e: React.MouseEvent<unknown>) => {
    dispatch(getSystem(system_id))
  }

  return (
    <MTableRow className={"tableRow"} onClick={onClickRecord(system.system_id)}>
      <MTableCell>{system.system_id}</MTableCell>
      <MTableCell>{system.system_name}</MTableCell>
      <MTableCell>{system.system_en_name}</MTableCell>
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