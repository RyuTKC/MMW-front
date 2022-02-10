import { RootState } from "reducks/store";
import { createSelector } from "reselect";
import linq from "linq"
import { companyData, initialSystemData, productData, roleData, statusData, systemData } from "appConfig";

const machineSystemsSelector = (state: RootState) => state.machines.editElement.data.systems
const systemSelector = (state: RootState) => state.systems.datas
const machineProductSelector = (state: RootState) => state.machines.editElement.data.product
const productsSelector = (state: RootState) => state.products.datas
const machineVenderSelector = (state: RootState) => state.machines.editElement.data.vender
const companySelector = (state: RootState) => state.companies.datas
const machineStatusSelector = (state: RootState) => state.machines.editElement.data.status
const statusesSelector = (state: RootState) => state.enums.statuses
const machineRoleSelector = (state: RootState) => state.machines.editElement.data.role
const rolesSelector = (state: RootState) => state.enums.roles

// 所属システム選択フォーム用へのデータ加工
export const convertCheckRadioSystems = createSelector(
  [machineSystemsSelector, systemSelector],
  (machineSystems, systems) => {
    type checkSystems = {
      main_flg: boolean
      selected: boolean
    } & systemData

    const checkRadioSystems = new Map<number, checkSystems>();

    [...systems].map(v => {
      checkRadioSystems.set(v.system_id, { ...v, selected: false, main_flg: false })
    })

    machineSystems.filter(v => v.system_id > 0).map(v => {
      checkRadioSystems.set(v.system_id, { ...v, selected: true, main_flg: v.main_flg })
    })
    
    return checkRadioSystems
  }
)

// プロダクト選択フォーム用へのデータ加工
export const convertSelectProduct = createSelector(
  [machineProductSelector, productsSelector],
  (machineProduct, products) => {
    type selectProduct = {
      selected: boolean
    } & productData

    // マップ型形成
    const selectedProduct = new Map<number, selectProduct>();

    // idをkeyにdataオブジェクトを格納
    [...products].map(v => {
      selectedProduct.set(v.product_id, { ...v, selected: false })
    })

    // 登録されているプロダクトを選択状態に変更
    selectedProduct.set(machineProduct.product_id, { ...machineProduct, selected: true })

    return selectedProduct
  }
)

export const convertSelectVender = createSelector(
  [machineVenderSelector, companySelector],
  (machineVender, companies) => {
    type selectCompany = {
      selected: boolean
    } & companyData

    // マップ型形成
    const selectedCompany = new Map<number, selectCompany>();

    // idをkeyにdataオブジェクトを格納
    [...companies].map(v => {
      selectedCompany.set(v.company_id, { ...v, selected: false })
    })

    // 登録されているプロダクトを選択状態に変更
    selectedCompany.set(machineVender.company_id, { ...machineVender, selected: true })

    return selectedCompany
  }
)

export const convertSelectStatus = createSelector(
  [machineStatusSelector, statusesSelector],
  (machineStatus, companies) => {
    type selectStatus = {
      selected: boolean
    } & statusData

    // マップ型形成
    const selectedStatus = new Map<number, selectStatus>();

    // idをkeyにdataオブジェクトを格納
    [...companies].map(v => {
      selectedStatus.set(v.status_id, { ...v, selected: false })
    })

    // 登録されているプロダクトを選択状態に変更
    selectedStatus.set(machineStatus.status_id, { ...machineStatus, selected: true })

    return selectedStatus
  }
)

export const convertSelectRole = createSelector(
  [machineRoleSelector, rolesSelector],
  (machineRole, companies) => {
    type selectRole = {
      selected: boolean
    } & roleData

    // マップ型形成
    const selectedRole = new Map<number, selectRole>();

    // idをkeyにdataオブジェクトを格納
    [...companies].map(v => {
      selectedRole.set(v.role_id, { ...v, selected: false })
    })

    // 登録されているプロダクトを選択状態に変更
    selectedRole.set(machineRole.role_id, { ...machineRole, selected: true })

    return selectedRole
  }
)