import {
  MenuItem as MMenuItem,
  Select as MSelect,
  TextField as MTextField,
} from "@material-ui/core"
import {
  DatePicker,
} from '@material-ui/pickers';
import { initialRoleData, initialStatusData } from "appConfig";
import React, { useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { editDataAction, setMachineAction } from "reducks/Machines/action"
import { convertSelectRole, convertSelectStatus, convertSelectVender } from "reducks/Machines/selectors"
import { RootState } from "reducks/store"
import styled from "styled-components"

type Props = {
  className?: string
}
const formContent = "form-content"
const textField = "text-field"

const MachineFeatureForm = ({ className = "", }: Props) => {
  const dispatch = useDispatch()

  const notes = useSelector((state: RootState) => state.machines.editElement.data.notes, shallowEqual)
  const machineStatus = { ...useSelector((state: RootState) => state.machines.editElement.data.status, shallowEqual) }
  const selectStatus = useSelector(convertSelectStatus)
  const machineRole = { ...useSelector((state: RootState) => state.machines.editElement.data.role, shallowEqual) }
  const selectRole = useSelector(convertSelectRole)

  const notesChange = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(editDataAction(e.target.value, "notes"))
  }

  const statusChange = (e: React.ChangeEvent<{
    name?: string | undefined;
    value: unknown;
  }>) => {
    const nextStatus = selectStatus.get(e.target.value as number)

    dispatch(editDataAction(nextStatus !== undefined ? nextStatus : initialStatusData, "status"))
  }

  const roleChange = (e: React.ChangeEvent<{
    name?: string | undefined;
    value: unknown;
  }>) => {
    const nextRole = selectRole.get(e.target.value as number)

    dispatch(editDataAction(nextRole !== undefined ? nextRole : initialRoleData, "role"))
  }

  return (
    <div className={formContent}>
      <MSelect label="状態" value={selectStatus.get(machineStatus.status_id)?.status_id} onChange={statusChange}>
        {
          Array.from(selectStatus).map(([key, v], i) => {
            return (
              <MMenuItem key={i} value={v.status_id}>{v.status_name}</MMenuItem>
            )
          })
        }
      </MSelect>
      <MSelect label="機材ロール" value={selectRole.get(machineRole.role_id)?.role_id} onChange={roleChange}>
        {
          Array.from(selectRole).map(([key, v], i) => {
            return (
              <MMenuItem key={i} value={v.role_id}>{v.role_name}</MMenuItem>
            )
          })
        }
      </MSelect>
      <MTextField label="備考" defaultValue={notes} variant="outlined" onBlur={notesChange} className={textField} multiline />
    </div>
  )
}

export default styled(MachineFeatureForm)`
  &&&{
   
    .${textField}{
      font-size: 10px;
      padding: 0;
    }
  }
  `