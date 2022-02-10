import React, { useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { postSystem, putSystem } from "reducks/Systems/operations"
import { RootState } from "reducks/store"
import styled from "styled-components"

type Props = {
  className?: string
}

export const SubmitButton = ({ className = "", }: Props) => {
  const dispatch = useDispatch()
  const systemId = useSelector((state: RootState) => state.systems.editElement.data.system_id)

  const onPutSystemData = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(putSystem())
    e.preventDefault()

  }
  const onCreateSystemData = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(postSystem())
    e.preventDefault()
  }

  return (
    <>
      {systemId < 0
        ? <button onClick={onCreateSystemData}>新規作成</button>
        : <button onClick={onPutSystemData}>送信</button>

      }
    </>
  )
}