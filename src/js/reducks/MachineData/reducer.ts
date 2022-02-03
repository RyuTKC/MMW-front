import { MachineTableState, MachineTableAction, MachineTableActionType } from "./types"
import { Reducer } from "redux";
import { initialMachineData, machineData } from "appConfig";

export const initialState: MachineTableState = {
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
      vender: "購入ベンダー",
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

export const machineDataReducer: Reducer<MachineTableState, MachineTableAction> = (state = initialState, action): MachineTableState => {

  switch (action.type) {
    case MachineTableActionType.getData:
      return {
        ...state,

        editElement: {
          ...state.editElement,

          data: action.data,
          modalFlg: action.modalFlg
        }

      }
    case MachineTableActionType.getDatas:
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
    case MachineTableActionType.postData:
      return {
        ...state
      }

    case MachineTableActionType.editData:
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
    case MachineTableActionType.sort:
      return {
        ...state,

        tableData: {
          ...state.tableData,

          sortData: action.sortData,
          sortElement: action.sortElement,
        }
      }
    case MachineTableActionType.paging:
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