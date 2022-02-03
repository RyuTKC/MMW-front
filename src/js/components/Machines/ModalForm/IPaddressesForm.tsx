import {
  Checkbox as MCheckbox,
  FormControl as MFormControl,
  IconButton,
  TextField as MTextField,
} from "@material-ui/core"
import { AddCircleOutline, RemoveCircleOutline } from "@material-ui/icons"
import { initialMachineData } from "appConfig"
import React, { useEffect, useRef, useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { editDataAction } from "reducks/MachineData/action"
import { RootState } from "reducks/store"
import styled from "styled-components"

type Props = {
  className?: string
}

const IpAddressesForm = ({ className = "", }: Props) => {
  const dispatch = useDispatch()
  const machineId = useSelector((state: RootState) => state.machineData.editElement.data.machine_id, shallowEqual)
  const nowIpAddresses = useSelector((state: RootState) => state.machineData.editElement.data.ip_addresses)
  const newIpId = useRef(-1)

  const wiredChange = (targetIpId: number) => (e: React.ChangeEvent<HTMLInputElement>, checkState: boolean) => {

    const nextIpAddresses = [...nowIpAddresses]
      .map(v => {
        if (v.ip_id === targetIpId)
          v.wiredflg = checkState
        return v
      })
    console.log(targetIpId)
    console.log(nextIpAddresses)
    dispatch(editDataAction(nextIpAddresses, "ip_addresses"))
  }

  const addIpForm = () => {
    const nextIpAddresses = [...nowIpAddresses]
    nextIpAddresses.push({
      ip_id: newIpId.current,
      ipv4_address: "0.0.0.0",
      wiredflg: false,
      machine_id: machineId
    })

    dispatch(editDataAction(nextIpAddresses, "ip_addresses"))

    newIpId.current--
  }
  const removeIpForm = () => {
    const nextIpAddresses = [...nowIpAddresses]
    nextIpAddresses.pop()

    dispatch(editDataAction(nextIpAddresses, "ip_addresses"))

    newIpId.current === -1 ? newIpId.current : newIpId.current++
  }

  const ipChange = (targetIpId: number) => (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const nextIpAddresses = [...nowIpAddresses]
      .map((v, i) => {
        if (v.ip_id === targetIpId)
          v.ipv4_address = e.target.value
      })

  }


  return (
    <MFormControl className={className}>
      {
        nowIpAddresses.map((v, i) => {
          return (
            <React.Fragment key={i}>
              <div>
                <MTextField defaultValue={v.ipv4_address} onBlur={ipChange(v.ip_id)}></MTextField>
                <MCheckbox checked={v.wiredflg} onChange={wiredChange(v.ip_id)} />
              </div>
            </React.Fragment>
          )
        })
      }
      <div>
        <IconButton onClick={addIpForm}>
          <AddCircleOutline />
        </IconButton>
        <IconButton onClick={removeIpForm}>
          <RemoveCircleOutline />
        </IconButton>
      </div>
    </MFormControl>
  )
}

export default styled(IpAddressesForm)`
&&&&{
    display: block;

  }
`