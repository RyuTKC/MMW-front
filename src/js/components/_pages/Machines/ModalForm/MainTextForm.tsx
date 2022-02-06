import {
  Fade as MFade,
  Modal as MModal,
  Select as MSelect,
  TextField as MTextField,
} from "@material-ui/core"
import { initialMachineData, initialSystemData, machineData, systemData } from "appConfig"
import React, { useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { editDataAction} from "reducks/Machines/action"
import { RootState } from "reducks/store"
import styled from "styled-components"
import CheckAndRadio from "./CheckAndRadio"
import IPaddressesForm from "./IPaddressesForm"

type Props = {
  className?: string
}
const formContent = "form-content"
const textField = "text-field"

const ModalComponent = ({ className = "", }: Props) => {
  const dispatch = useDispatch()
  const machineName = useSelector((state: RootState) => state.machines.editElement.data.machine_name, shallowEqual)
  const hostName = useSelector((state: RootState) => state.machines.editElement.data.host_name, shallowEqual)
  const adminName = useSelector((state: RootState) => state.machines.editElement.data.administrator, shallowEqual)
  const place = useSelector((state: RootState) => state.machines.editElement.data.place, shallowEqual)

  const nameChange = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(editDataAction(e.target.value, "machine_name"))
  }
  const hostChange = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(editDataAction(e.target.value, "host_name"))
  }
  const placeChange = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(editDataAction(e.target.value, "place"))
  }
  const adminChange = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(editDataAction(e.target.value, "administrator"))
  }

  return (
      <div className={formContent}>
        <MTextField label="機材名" defaultValue={machineName} variant="outlined" onBlur={nameChange} className={textField} />
        <MTextField label="ホスト名" defaultValue={hostName} variant="outlined" onBlur={hostChange} className={textField} />
        <MTextField label="管理者" defaultValue={adminName} variant="outlined" onBlur={adminChange} className={textField} />
        <MTextField label="保管場所" defaultValue={place} variant="outlined" onBlur={placeChange} className={textField} />
      </div>
  )
}

export default styled(ModalComponent)`
  &&&{
   
    .${textField}{
      font-size: 10px;
      padding: 0;
    }
  }
`