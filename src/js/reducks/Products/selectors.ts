import { RootState } from "reducks/store";
import { createSelector } from "reselect";
import linq from "linq"
import { companyData, initialProductData, productData, productTypeData } from "appConfig";
import memoize from "lodash.memoize";

const productManufacturerSelector = (state: RootState) => state.products.editElement.data.manufacturer
const companySelector = (state: RootState) => state.companies.datas
const productProductTypeSelector = (state: RootState) => state.products.editElement.data.product_type
const productTypeSelector = (state: RootState) => state.enums.product_types

export const convertSelectManufacturer= createSelector(
  [productManufacturerSelector, companySelector],
  (productManufacturer, manufacturers)=>{
    type selectCompany = {
      selected: boolean
    } & companyData

    // マップ型形成
    const selectedCompany = new Map<number, selectCompany>();

    // idをkeyにdataオブジェクトを格納
    [...manufacturers].map(v => {
      selectedCompany.set(v.company_id, { ...v, selected: false })
    })

    // 登録されているプロダクトを選択状態に変更
    selectedCompany.set(productManufacturer.company_id, { ...productManufacturer, selected: true })

    return selectedCompany
  }
)

export const convertSelectProductType= createSelector(
  [productProductTypeSelector, productTypeSelector],
  (productProductType, productTypes)=>{
    type selectProductType = {
      selected: boolean
    } & productTypeData

    // マップ型形成
    const selectedCompany = new Map<number, selectProductType>();

    // idをkeyにdataオブジェクトを格納
    [...productTypes].map(v => {
      selectedCompany.set(v.product_type_id, { ...v, selected: false })
    })

    // 登録されているプロダクトを選択状態に変更
    selectedCompany.set(productProductType.product_type_id, { ...productProductType, selected: true })

    return selectedCompany
  }
)