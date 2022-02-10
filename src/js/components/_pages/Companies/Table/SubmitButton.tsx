import React, { useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { postCompany, putCompany } from "reducks/Companies/operations"
import { RootState } from "reducks/store"
import styled from "styled-components"

type Props = {
  className?: string
}

export const SubmitButton = ({ className = "", }: Props) => {
  const dispatch = useDispatch()
  const companyId = useSelector((state: RootState) => state.companies.editElement.data.company_id)

  const onPutCompanyData = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(putCompany())
    e.preventDefault()

  }
  const onCreateCompanyData = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(postCompany())
    e.preventDefault()
  }

  return (
    <>
      {companyId < 0
        ? <button onClick={onCreateCompanyData}>新規作成</button>
        : <button onClick={onPutCompanyData}>送信</button>

      }
    </>
  )
}