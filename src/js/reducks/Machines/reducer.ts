import { MachinesState, MachinesAction, MachinesActionType } from "./types"
import { Reducer } from "redux";
import { initialMachineData } from "appConfig";

export const initialState: MachinesState = {
  datas: [initialMachineData],
  editElement: {
    data: initialMachineData,
    modalFlg: false,
  },
  tableData: {
    sortData: [initialMachineData],
    columnDisplayName: {
      machine_id: "ID",
      machine_name: "マシン名",
      host_name: "ホスト名",
      administrator: "管理者",
      place: "保管場所",
      qr_or_barcode: "QRコード",
      maintenance_date: "最終メンテ日",
      assurance: "保障",
      serial_number: "シリアル",
      purchase_date: "購入年月",
      notes: "備考",
      product: "製品",
      status_type: "ステータス",
      ip_addresses: "IPアドレス",
      systems: "システム",
      role_id: "ロール",
      vender: "ベンダー",
      created_at: "登録日",
      updated_at: "更新日"
    },
    sortElement: {
      orderBy: "machine_id",
      sortDirection: "desc"
    },
    pageElement: {
      nowPage: 0,
      recordPerPage: 25,
      pageCount: 0,
    },
  }
}

export const machinesReducer: Reducer<MachinesState, MachinesAction> = (state = initialState, action): MachinesState => {

  switch (action.type) {
    case MachinesActionType.setMachine:
      return {
        ...state,

        editElement: {
          ...state.editElement,

          data: action.data,
          modalFlg: action.modalFlg
        }

      }
    case MachinesActionType.setMachines:
      return {
        ...state,

        datas: action.data,
        tableData: {
          ...state.tableData,

          pageElement: {
            ...state.tableData.pageElement,

            nowPage: 0
          }
        }

      }

    case MachinesActionType.editMachine:
      return {
        ...state,
        editElement: {
          ...state.editElement,

          data: {
            ...state.editElement.data,

            [action.key]: action.data
          }
        }
      }
    case MachinesActionType.sortMachine:
      return {
        ...state,

        tableData: {
          ...state.tableData,

          sortData: action.sortData,
          sortElement: action.sortElement,
        }
      }
    case MachinesActionType.pagingMachine:
      return {
        ...state,

        tableData: {
          ...state.tableData,

          pageElement: {
            ...state.tableData.pageElement,

            nowPage: action.nextPage
          }
        }
      }
    default:
      const _: never = action
      return state
  }
}