import { sortMachineAction, setMachinesAction, setMachineAction } from "./action"
import { MachinesAction } from "./types"
import { AppThunkAction } from "reducks/store"
import {
  appConfig,
  isMachineSystem,
  machineData,
  machineSystem,
  MachinesAPI,
  productData,
  systemData,
  isArray,
  ipAddress,
  isProductData,
  isCompanyData,
  companyData,
  statusData,
  roleData
} from "appConfig"
import { setSystemsAction } from "reducks/Systems/action"
import { SystemsAction } from "reducks/Systems/types"
import { SortDirection } from "@material-ui/core"
import { setProductsAction } from "reducks/Products/action"
import { ProductsAction } from "reducks/Products/types"
import { setCompaniesAction } from "reducks/Companies/action"
import { CompaniesAction } from "reducks/Companies/types"
import { setRolesAction, setStatusesAction } from "reducks/Enums/action"
import { EnumsAction } from "reducks/Enums/types"

export const getMachines = (): AppThunkAction<MachinesAction> => {
  return async (dispatch, getState) => {
    const orderBy = getState().machines.tableData.sortElement.orderBy

    await appConfig.axios.get(MachinesAPI.root)
      .then(res => {
        const machines = res.data.machines as machineData[]
        dispatch(setMachinesAction(machines))
        dispatch(sortMachineDatas(orderBy, true))
      }
      )
      .catch(error =>
        console.error(error)
      )
  }
}

export const getMachine = (machine_id: number): AppThunkAction<MachinesAction | SystemsAction | ProductsAction | CompaniesAction | EnumsAction> => {
  return async (dispatch, getState) => {

    appConfig.axios.get(MachinesAPI.root + `/${machine_id}`)
      .then(res => {
        const machine = res.data.machine as machineData
        const systems = res.data.systems as systemData[]
        const products = res.data.products as productData[]
        const companies = res.data.companies as companyData[]
        const statuses = res.data.statuses as statusData[]
        const roles = res.data.roles as roleData[]
        dispatch(setMachineAction(machine, true))
        dispatch(setSystemsAction(systems))
        dispatch(setProductsAction(products))
        dispatch(setCompaniesAction(companies))
        dispatch(setStatusesAction(statuses))
        dispatch(setRolesAction(roles))
      })
      .catch(e => {
        console.log(e)
      })
  }
}

export const postMachine = (): AppThunkAction<MachinesAction> => {
  return async (dispatch, getState) => {
    const postMachine = getState().machines.editElement.data

    appConfig.axios.post(MachinesAPI.root + `${postMachine.machine_id}`)
  }
}

export const sortMachineDatas = (targetColumn: keyof machineData, updateFlg: boolean = false): AppThunkAction<MachinesAction> => {

  const sortFunction = (a: number | string, b: number | string, sortDirection: Exclude<SortDirection, boolean>): number => {

    switch (sortDirection) {
      case "asc":
        if (a < b)
          return -1
        else if (a > b)
          return 1
        else
          break;

      case "desc":
        if (a < b)
          return 1
        else if (a > b)
          return -1
        else
          break;

    }
    return 0
  }

  return async (dispatch, getState) => {
    const sortState = { ...getState().machines.tableData.sortElement }
    const datas = [...getState().machines.datas]

    // データが無い場合は終了
    if (datas.length === 0)
      return

    // 次状態を現在のstateで初期化
    const nextSortState = { ...sortState }

    // データ更新ならばソート順は変更しない
    switch (updateFlg) {
      case true:
        break;
      case false:
        if (sortState.orderBy === targetColumn) {
          switch (sortState.sortDirection) {
            case "asc":
              nextSortState.sortDirection = "desc"
              break;
            case "desc":
              nextSortState.sortDirection = "asc"
              break;
          }
        }
        // 別カラムを選ぶ場合は昇順にする
        else {
          nextSortState.orderBy = targetColumn
          nextSortState.sortDirection = "asc"
        }
        break;
    }

    const nextSortDatas = datas.sort((a, b) => {
      const typedA = a[targetColumn] === ("" || undefined || null) ? "-" : a[targetColumn]
      const typedB = b[targetColumn] === ("" || undefined || null) ? "-" : b[targetColumn]

      let targetA: string | number = 0;
      let targetB: string | number = 0

      switch (typeof typedA) {
        case "string":
        case "number":
          targetA = typedA
          targetB = typedB as typeof typedA
          break;
        case "object":
          if (isArray<systemData>(typedA)) {
            const systemA = typedA.find(v => v.main_flg)?.system_name
            const systemB = (typedB as typeof typedA).find(v => v.main_flg)?.system_name

            targetA = systemA !== undefined ? systemA : ""
            targetB = systemB !== undefined ? systemB : ""
          }
          else if (isProductData(typedA)) {
            targetA = typedA.product_name
            targetB = (typedB as typeof typedA).product_name
          }
          else if (isCompanyData(typedA)) {
            targetA = typedA.company_name
            targetB = (typedB as typeof typedA).company_name
          }
          else if (typedA instanceof Date) {
            targetA = typedA.getDate()
            targetB = (typedB as typeof typedA).getDate()
          }
          break;

        default:
          return 0
      }

      return sortFunction(targetA, targetB, nextSortState.sortDirection)
    })

    dispatch(sortMachineAction(nextSortDatas, nextSortState.orderBy, nextSortState.sortDirection))

  }
}

export const pagingTable = (): AppThunkAction<MachinesAction> => {
  return async () => {

  }
}