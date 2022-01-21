import { Box as MBox, Modal as MModal } from "@material-ui/core"
import React, { useState } from "react"


export default () => {

  const onModalClose=()=>{

  }

  return (
    <>
      <MModal open={false} onClose={onModalClose}>
        <MBox>
          test
        </MBox>
      </MModal>
    </>
  )
}