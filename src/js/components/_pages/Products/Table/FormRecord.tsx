import React, { useState, useEffect, } from "react";
import styled from "styled-components";
import MTableRow from "@material-ui/core/TableRow";
import MTableCell from "@material-ui/core/TableCell";
import CancelIcon from "@material-ui/icons/Cancel"
import { RootState } from "reducks/store";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { editDataAction, pagingProductAction, setProductAction } from "reducks/Products/action";
import { getProduct, sortProductDatas, getProducts, putProduct } from "reducks/Products/operations";
import { CircularProgress as MCircularProgress, IconButton, MenuItem as MMenuItem, Select as MSelect, TextField as MTextField } from "@material-ui/core";
import { convertSelectManufacturer, convertSelectProductType } from "reducks/Products/selectors";
import { companyData, initialCompanyData, initialProductData, initialProductTypeData, productTypeData } from "appConfig";
import { SubmitButton } from "./SubmitButton";


type Props = {
  className?: string
}

const MyTable = ({ className }: Props) => {
  // redux hooks
  const dispatch = useDispatch()
  const productId = useSelector((state: RootState) => state.products.editElement.data.product_id, shallowEqual)
  const productName = useSelector((state: RootState) => state.products.editElement.data.product_name, shallowEqual)
  const productType = useSelector((state: RootState) => state.products.editElement.data.product_type, shallowEqual)
  const manufacturer = useSelector((state: RootState) => state.products.editElement.data.manufacturer, shallowEqual)
  const modelNumber = useSelector((state: RootState) => state.products.editElement.data.model_number, shallowEqual)

  const selectManufacturer = useSelector(convertSelectManufacturer)
  const selectProductType = useSelector(convertSelectProductType)

  const nameChange = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(editDataAction(e.target.value, "product_name"))
  }
  const modelNumberChange = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(editDataAction(e.target.value, "model_number"))
  }
  const manufacturerChange = (e: React.ChangeEvent<{
    name?: string | undefined;
    value: unknown;
  }>) => {
    const nextManufacturer = { ...selectManufacturer.get(e.target.value as number) }
    delete nextManufacturer.selected

    dispatch(editDataAction(nextManufacturer !== undefined
      ? nextManufacturer as companyData
      : initialCompanyData, "manufacturer"))
  }

  const productTypeChange = (e: React.ChangeEvent<{
    name?: string | undefined;
    value: unknown;
  }>) => {
    const nextProductType = { ...selectProductType.get(e.target.value as number) }
    delete nextProductType.selected

    dispatch(editDataAction(nextProductType !== undefined ? nextProductType as productTypeData : initialProductTypeData, "product_type"))
  }

  const onCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setProductAction(initialProductData, false))
    e.preventDefault()
  }

  return (
    <MTableRow className={"tableRow"} >
      <MTableCell>{productId}</MTableCell>
      <MTableCell>
        <MTextField defaultValue={productName} variant="outlined" onBlur={nameChange} />
      </MTableCell>
      <MTableCell>
        <MTextField defaultValue={modelNumber} variant="outlined" onBlur={modelNumberChange} />
      </MTableCell>
      <MTableCell>
        <MSelect label="" value={productType.product_type_id < 0
          ? Array.from(selectProductType.keys())[0]
          : selectProductType.get(productType.product_type_id)?.product_type_id
        } onChange={productTypeChange}>
          {
            Array.from(selectProductType).map(([key, v], i) => {
              return (
                <MMenuItem key={i} value={v.product_type_id}>{v.product_type_name}</MMenuItem>
              )
            })
          }
        </MSelect>
      </MTableCell>
      <MTableCell>
        <MSelect label="" value={manufacturer.company_id < 0
          ? Array.from(selectManufacturer.keys())[0]
          : selectManufacturer.get(manufacturer.company_id)?.company_id
        } onChange={manufacturerChange}>
          {
            Array.from(selectManufacturer).map(([key, v], i) => {
              return (
                <MMenuItem key={i} value={v.company_id}>{v.company_name}</MMenuItem>
              )
            })
          }
        </MSelect>
        <SubmitButton />
        <IconButton onClick={onCancel}>
          <CancelIcon></CancelIcon>
        </IconButton>
      </MTableCell>
    </MTableRow>
  )
};

export default styled(MyTable)`
  width: 75%;
  color: #42a5f5;
  
  th, td{
    font-size: 12px;
    
  }

  & .tableRow:hover{
    cursor: pointer;
    background-color: rgba(30, 184, 223, 0.176);
  }

   @media (max-width: 640px){
    font-size: 32px;
    color: #444444;
  }
  @media print{
    font-size: 32px;
    color: #444444;
  
}
`