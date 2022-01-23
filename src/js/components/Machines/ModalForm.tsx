import { Box as MBox, Checkbox as MCheckbox, FormControlLabel as MFormControlLabel, Modal as MModal, Radio as MRadio, RadioGroup as MRadioGroup, Select as MSelect } from "@material-ui/core"
import { initialMachineData } from "appConfig"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDataAction } from "reducks/MachineData/action"
import { RootState } from "reducks/store"
import styled from "styled-components"

type Props = {
  className?: string
}

const ModalComponent = ({ className = "", }: Props) => {
  const dispatch = useDispatch()
  const editElement = useSelector((state: RootState) => state.machineData.editElement)
  const data = editElement.data

  const onModalClose = () => {
    dispatch(getDataAction(initialMachineData, false))
  }

  return (
    <>
      <MModal open={editElement.modalFlg} onClose={onModalClose}>
        <MBox className={className}>
          <div>
            {data.host_name}
          </div>
          <div>
            {data.machine_id}
          </div>
          <div>
            {data.machine_name}
          </div>
          <div>
          </div>
          {Object.values(data.ip_addresses).map(
            (v, i) => {
              return (
                <div key={i}>
                  <div>{v.ipv4_address}</div>
                  <div>{v.wiredflg}</div>
                </div>
              )
            }
          )
          }
          <MSelect></MSelect>
          <MCheckbox></MCheckbox>
          <MRadioGroup>
            <MFormControlLabel value="1" control={<MRadio value=""/>} label=""></MFormControlLabel>
          </MRadioGroup>
        </MBox>
      </MModal>
    </>
  )
}

export default styled(ModalComponent)`
  background-color: white;
`