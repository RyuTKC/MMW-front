import {
  Fade as MFade,
  Modal as MModal,
} from "@material-ui/core"
import { initialMachineData } from "appConfig"
import React, { useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { setMachineAction } from "reducks/Machines/action"
import { postMachine } from "reducks/Machines/operations"
import { RootState } from "reducks/store"
import styled from "styled-components"
import CheckSystems from "./CheckSystems"
import IPaddressesForm from "./IPaddressesForm"
import MachineFeatureForm from "./MachineFeatureForm"
import MainTextForm from "./MainTextForm"
import ProductInfoForm from "./ProductInfoForm"

type Props = {
  className?: string
}
const modalContent = "modal-content"
const textField = "text-field"

const ModalComponent = ({ className = "", }: Props) => {
  const dispatch = useDispatch()
  const modalFlg=useSelector((state: RootState) => state.machines.editElement.modalFlg, shallowEqual)
  
  const onModalClose = () => {
    dispatch(setMachineAction(initialMachineData, false))
  }

  const onPostMachineData=()=>{
    dispatch(postMachine())
  }

  return (
    <>
      <MModal className={className} open={modalFlg} onClose={onModalClose} closeAfterTransition>
        <MFade in={modalFlg}>
          <div className={modalContent}>
            <MainTextForm />
            <MachineFeatureForm />
            <ProductInfoForm />
            <IPaddressesForm />
            <CheckSystems />
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