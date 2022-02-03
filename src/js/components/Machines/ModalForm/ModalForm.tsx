import {
  Fade as MFade,
  Modal as MModal,
  Select as MSelect,
  TextField as MTextField,
} from "@material-ui/core"
import { initialMachineData, initialSystemData, machineData, systemData } from "appConfig"
import React, { useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { editDataAction, getDataAction } from "reducks/MachineData/action"
import { RootState } from "reducks/store"
import styled from "styled-components"
import CheckAndRadio from "./CheckAndRadio"
import IPaddressesForm from "./IPaddressesForm"
import MainTextForm from "./MainTextForm"

type Props = {
  className?: string
}
const modalContent = "modal-content"
const textField = "text-field"

const ModalComponent = ({ className = "", }: Props) => {
  const dispatch = useDispatch()
  const modalFlg=useSelector((state: RootState) => state.machineData.editElement.modalFlg, shallowEqual)
  const onModalClose = () => {
    dispatch(getDataAction(initialMachineData, false))
  }

  return (
    <>
      <MModal className={className} open={modalFlg} onClose={onModalClose} closeAfterTransition>
        <MFade in={modalFlg}>
          <div className={modalContent}>
            <MainTextForm />
            <IPaddressesForm />
            <CheckAndRadio />
            
          </div>
        </MFade>
      </MModal>
    </>
  )
}

export default styled(ModalComponent)`
  &&&{
    
    .${modalContent}{
    border: none;
    border-radius: 10px;
    background-color: white;
    padding: 1%;
    width: 75%;
    height: 50%;
    margin: 10% auto;
    overflow-y: scroll;
    
    .${textField}{
      font-size: 10px;
      padding: 0;
    }
  }
  }
`