import React, { useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { postProduct, putProduct } from "reducks/Products/operations"
import { RootState } from "reducks/store"
import styled from "styled-components"

type Props = {
  className?: string
}

export const SubmitButton = ({ className = "", }: Props) => {
  const dispatch = useDispatch()
  const productId = useSelector((state: RootState) => state.products.editElement.data.product_id)

  const onPutProductData = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(putProduct())
    e.preventDefault()

  }
  const onCreateProductData = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(postProduct())
    e.preventDefault()
  }

  return (
    <>
      {productId < 0
        ? <button onClick={onCreateProductData}>新規作成</button>
        : <button onClick={onPutProductData}>送信</button>

      }
    </>
  )
}