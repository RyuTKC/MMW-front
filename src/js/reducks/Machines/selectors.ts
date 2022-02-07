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
    // データが所属しているシステム
    const dataSystem = [...machineSystems]

    // チェックボックス、ラジオボタン用の型定義
    type checkRadioType = {
      // 扱いやすいようにsystem_idをkeyにする
      [system_id: number]: {
        main_flg: boolean
        used: boolean
      } & systemData
    }

    // チェックボックスラジオボタン用のオブジェクト生成
    const checkRadioObject: checkRadioType = {}

    // 取得した全システムでボタン用オブジェクトを初期化
    Object.values(systems).map((v, i) => {
      checkRadioObject[v.system_id] = {
        ...v,

        main_flg: false,
        used: false,
      }
    })

    // 所属しているシステムの状態をボタン用オブジェクトに反映
    dataSystem.map((v, i) => {
      checkRadioObject[v.system_id] = {
        ...checkRadioObject[v.system_id],

        main_flg: v.main_flg,
        used: true
      }
    })

    // ボタン用のオブジェクトを配列に直して返却
    return Object.values(checkRadioObject)
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

export const convertSelectVender= createSelector(
  [machineVenderSelector, companySelector],
  (machineVender, companies)=>{
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

export const convertSelectStatus= createSelector(
  [machineStatusSelector, statusesSelector],
  (machineStatus, companies)=>{
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

export const convertSelectRole= createSelector(
  [machineRoleSelector, rolesSelector],
  (machineRole, companies)=>{
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