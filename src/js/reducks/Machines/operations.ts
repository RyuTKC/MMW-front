import { sortAction, setMachinesAction, setMachineAction } from "./action"
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
  isCompanyData
} from "appConfig"
import { setSystemsAction } from "reducks/Systems/action"
import { SystemsAction } from "reducks/Systems/types"
import { companyData } from "js/config/dataFormat/company"

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

export const getMachine = (machine_id: number): AppThunkAction<MachinesAction | SystemsAction> => {
  return async (dispatch, getState) => {

    appConfig.axios.get(MachinesAPI.root + `/${machine_id}`)
      .then(res => {
        const machine = res.data.machine as machineData
        const systems = res.data.systems as systemData[]
        // const productData = res.data.products as productData[]
        dispatch(setMachineAction(machine, true))
        dispatch(setSystemsAction(systems))
      })
      .catch(e => {
        console.log(e)
      })
  }
}

export const sortMachineDatas = (targetColumn: keyof machineData, updateFlg: boolean = false)
  : AppThunkAction<MachinesAction> => {

  return async (dispatch, getState) => {
    const sortState = { ...getState().machines.tableData.sortElement }
    const datas = [...getState().machines.datas]


    if (datas.length === 0)
      return

    if (targetColumn === "systems") {
    }

    // 次状態を現在のstateで初期化
    const nextSortState = { ...sortState }
    // ソート規則のオブジェクト
    const sortRule = {
      "asc": [1, -1],
      "desc": [-1, 1],
    }

    // カラムが同じならソート順を入れ替え（データ更新時は無視）
    if (sortState.orderBy === targetColumn && !updateFlg) {
      switch (sortState.sortDirection) {
        case "asc":
          nextSortState.sortDirection = "desc"
          break;
        case "desc":
          nextSortState.sortDirection = "asc"
          break;
      }
    }
    else {
      nextSortState.orderBy = targetColumn
      nextSortState.sortDirection = "desc"
    }

    //ソート
    const nextSortDatas = datas.slice().sort((a, b) => {
      if (a[targetColumn] < b[targetColumn])
        return sortRule[nextSortState.sortDirection][0]
      else if (a[targetColumn] > b[targetColumn])
        return sortRule[nextSortState.sortDirection][1]
      else
        return 0
    })
    dispatch(sortAction(nextSortDatas, nextSortState.orderBy, nextSortState.sortDirection))
  }
}

export const sortMachineDatas2 = (targetColumn: keyof machineData, updateFlg: boolean = false): AppThunkAction<MachinesAction> => {

  const sortAsc = (columnKey: keyof machineData, datas: machineData[]) => {
    return datas.sort((a, b) => {
      const A = a[columnKey]
      const B = b[columnKey]


      switch (typeof A) {
        case "string":
        case "number":
          const stnumA= A as string | number
          const stnumB= B as string | number

          if (stnumA < stnumB)
            return -1
          else if (stnumA > stnumB)
            return 1
          else if (stnumA === stnumB)
            return 0
          break;

        case "object":

          if (isArray<machineSystem>(A) && isArray<machineSystem>(B)) {
            A as machineSystem[]
            B as machineSystem[]
          }
          else if (isProductData(A)) {
          }
          else if (isCompanyData(A)) {
            A
          }
          else{
            A
          }


          break;
        default:
          return 0;
      }
      return 0
    })


  }


  return async (dispatch, getState) => {
    const sortState = { ...getState().machines.tableData.sortElement }
    const datas = [...getState().machines.datas]

    // データが無い場合は終了
    if (datas.length === 0)
      return

    // 次状態を現在のstateで初期化
    const nextSortState = { ...sortState }

    // カラムが同じで、データ更新でないならばソート順入れ替えを実行
    if (sortState.orderBy === targetColumn && !updateFlg) {
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

    const nextSortDatas = datas


  }
}

export const pagingTable = (): AppThunkAction<MachinesAction> => {
  return async () => {

  }
}