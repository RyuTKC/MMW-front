import {
  Fade as MFade,
  Modal as MModal,
} from "@material-ui/core"
import { initialMachineData } from "appConfig"
import React, { useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { setMachineAction } from "reducks/Machines/action"
import { postMachine, putMachine } from "reducks/Machines/operations"
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

export const SubmitButton = ({ className = "", }: Props) => {
  const dispatch = useDispatch()
  const machineId = useSelector((state: RootState) => state.machines.editElement.data.machine_id)

  const onPutMachineData = () => {
    dispatch(putMachine())
  }
  const onCreateMachineData=()=>{
    dispatch(postMachine())
  }

  return (
    <>
      {machineId < 0
        ? <button onClick={onCreateMachineData}>新規作成</button>
        : <button onClick={onPutMachineData}>送信</button>

      }
    </>
  )
}