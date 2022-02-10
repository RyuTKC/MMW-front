import {
  MenuItem as MMenuItem,
  Select as MSelect,
  TextField as MTextField,
} from "@material-ui/core"
import {
  DatePicker,
} from '@material-ui/pickers';
import { companyData, initialProductData, productData } from "appConfig";
import React, { useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { editDataAction, setMachineAction } from "reducks/Machines/action"
import { convertSelectProduct, convertSelectVender } from "reducks/Machines/selectors"
import { RootState } from "reducks/store"
import styled from "styled-components"

type Props = {
  className?: string
}
const formContent = "form-content"
const textField = "text-field"

const ProductInfoForm = ({ className = "", }: Props) => {
  const dispatch = useDispatch()

  const assurance = useSelector((state: RootState) => state.machines.editElement.data.assurance, shallowEqual)
  const notes = useSelector((state: RootState) => state.machines.editElement.data.notes, shallowEqual)
  const serialNumber = useSelector((state: RootState) => state.machines.editElement.data.serial_number, shallowEqual)
  const machineProduct = { ...useSelector((state: RootState) => state.machines.editElement.data.product, shallowEqual) }
  const selectProduct = useSelector(convertSelectProduct)
  const machineVender = { ...useSelector((state: RootState) => state.machines.editElement.data.vender, shallowEqual) }
  const selectVender = useSelector(convertSelectVender)
  const purchaseDate = useSelector((state: RootState) => state.machines.editElement.data.purchase_date)

  const nameChange = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(editDataAction(e.target.value, "machine_name"))
  }
  const assuranceChange = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(editDataAction(e.target.value, "assurance"))
  }

  const serialChange = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(editDataAction(e.target.value, "serial_number"))
  }

  const productChange = (e: React.ChangeEvent<{
    name?: string | undefined;
    value: unknown;
  }>) => {
    const nextProduct = { ...selectProduct.get(e.target.value as number) }
    delete nextProduct?.selected

    dispatch(editDataAction(nextProduct !== undefined
      ? nextProduct as productData
      : initialProductData, "product"))
  }

  const venderChange = (e: React.ChangeEvent<{
    name?: string | undefined;
    value: unknown;
  }>) => {
    const nextVender = { ...selectVender.get(e.target.value as number) }
    delete nextVender.selected

    dispatch(editDataAction(nextVender !== undefined
      ? nextVender as companyData
      : initialProductData, "vender"))
  }

  const purchaseDateChange = (date: Date) => {
    dispatch(editDataAction(date, "purchase_date"))
  }

  return (
    <div className={formContent}>
      <MSelect label="モデル" value={machineProduct.product_id < 0
        ? Array.from(selectProduct.keys())[0]
        : selectProduct.get(machineProduct.product_id)?.product_id} onChange={productChange}>
        {
          Array.from(selectProduct).map(([key, v], i) => {
            return (
              <MMenuItem key={i} value={v.product_id}>{v.product_name}</MMenuItem>
            )
          })
        }
      </MSelect>
      <MTextField label="保険内容" defaultValue={assurance} variant="outlined" onBlur={assuranceChange} className={textField} />
      <MTextField label="シリアル" defaultValue={serialNumber} variant="outlined" onBlur={serialChange} className={textField} multiline />
      <MSelect label="購入ベンダー" value={machineVender.company_id < 0
        ? Array.from(selectVender.keys())[0]
        : selectVender.get(machineVender.company_id)?.company_id} onChange={venderChange}>
        {
          Array.from(selectVender).map(([key, v], i) => {
            return (
              <MMenuItem key={i} value={v.company_id}>{v.company_name}</MMenuItem>
            )
          })
        }
      </MSelect>
      <DatePicker value={purchaseDate}
        format="yyyy/MM"
        variant="inline"
        label="購入年月"
        disableToolbar
        onChange={(date) => date !== null ? purchaseDateChange(date) : {}} />
    </div>
  )
}

export default styled(ProductInfoForm)`
  &&&{
   
    .${textField}{
      font-size: 10px;
      padding: 0;
    }
  }
  `