import {
  Box as MBox,
  Checkbox as MCheckbox,
  FormControlLabel as MFormControlLabel,
  Modal as MModal,
  Radio as MRadio,
  RadioGroup as MRadioGroup,
  Select as MSelect,
} from "@material-ui/core"
import { initialMachineData, initialSystemData, systemData } from "appConfig"
import React, { useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { getDataAction } from "reducks/MachineData/action"
import { RootState } from "reducks/store"
import styled from "styled-components"

type Props = {
  className?: string
}

const ModalComponent = ({ className = "", }: Props) => {
  const dispatch = useDispatch()
  const editElement = useSelector((state: RootState) => state.machineData.editElement, shallowEqual)
  const systemDatas = useSelector((state: RootState) => state.systemData.data, shallowEqual)
  const machineData = editElement.data

  const [testRadio, setTestRadio] = useState(-1);
  const [testChecks, setTestChecks]= useState([] as boolean[]);

  const onModalClose = () => {
    dispatch(getDataAction(initialMachineData, false))
  }

  const radioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestRadio(Number((e.target as HTMLInputElement).value))
  }
  const checkboxChange=(e: React.ChangeEvent<HTMLInputElement>)=>{

  }

  return (
    <>
      <MModal open={editElement.modalFlg} onClose={onModalClose}>
        <MBox className={className}>
          <button onClick={onModalClose}>とじる</button>
          <div>
            {machineData.host_name}
          </div>
          <div>
            {machineData.machine_id}
          </div>
          <div>
            {machineData.machine_name}
          </div>
          <div>
          </div>
          {Object.values(machineData.ip_addresses).map(
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
          {/* <MSelect></MSelect> */}
          {/* <MCheckbox></MCheckbox> */}
          <MRadioGroup value={testRadio} onChange={radioChange}>
            {Object.values(systemDatas.map((v, i) => {
              return (
                <React.Fragment key={i}>
                  <MFormControlLabel value={v.system_id} control={
                    <>
                      <MRadio />
                      <MCheckbox onChange={checkboxChange}/>
                    </>
                  } label={v.system_name}></MFormControlLabel>
                </React.Fragment>
              )
            }
            )
            )
            }
          </MRadioGroup>
        </MBox>
      </MModal>
    </>
  )
}

export default styled(ModalComponent)`
  background-color: white;
`