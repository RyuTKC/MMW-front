import {
  Fade as MFade,
  Modal as MModal,
  Select as MSelect,
  TextareaAutosize,
  TextField as MTextField,
} from "@material-ui/core"
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import React, { useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { editDataAction, setMachineAction } from "reducks/Machines/action"
import { RootState } from "reducks/store"
import styled from "styled-components"

type Props = {
  className?: string
}
const formContent = "form-content"
const textField = "text-field"

const ModalComponent = ({ className = "", }: Props) => {
  const dispatch = useDispatch()

  const assurance = useSelector((state: RootState) => state.machines.editElement.data.assurance, shallowEqual)
  const notes = useSelector((state: RootState) => state.machines.editElement.data.notes, shallowEqual)
  const purchaseDate = useSelector((state: RootState) => state.machines.editElement.data.purchase_date)

  const nameChange = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(editDataAction(e.target.value, "machine_name"))
  }
  const hostChange = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(editDataAction(e.target.value, "host_name"))
  }
  const purchaseDateChange = (date: Date) => {
    dispatch(editDataAction(date, "purchase_date"))
  }

  return (
    <div className={formContent}>
      <MTextField label="保険内容" defaultValue={assurance} variant="outlined" onBlur={hostChange} className={textField} />
      <MTextField label="備考" defaultValue={notes} variant="outlined" onBlur={nameChange} className={textField} multiline />
      <DatePicker value={purchaseDate}
        format="yyyy/MM"
        variant="inline"
        label="購入年月"
        disableToolbar
        onChange={(date) => date !== null ? purchaseDateChange(date) : {}} />
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