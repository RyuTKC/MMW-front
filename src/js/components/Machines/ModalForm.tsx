import { Box as MBox, Modal as MModal } from "@material-ui/core"
import { machineData } from "appConfig"
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

  const onModalClose = () => {
    dispatch(getDataAction({} as machineData, false))
  }

  return (
    <>
      <MModal open={editElement.modalFlg} onClose={onModalClose}>
        <MBox className={className}>
          {Object.values(editElement.data).map((v, i) => {
            return (
              <div>
                {v}
              </div>
            )
          })}
        </MBox>
      </MModal>
    </>
  )
}

export default styled(ModalComponent)`
  background-color: white;
`