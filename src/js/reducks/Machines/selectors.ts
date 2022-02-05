import { RootState } from "reducks/store";
import { createSelector } from "reselect";
import linq from "linq"
import { initialSystemData, systemData } from "appConfig";

const editDataSystemSelector = (state: RootState) => state.machines.editElement.data.systems
const systemSelector = (state: RootState) => state.systems.datas

// radioButton用データ加工
export const convertCheckRadioSystems = createSelector(
  [editDataSystemSelector, systemSelector],
  (editDataSystems, systems) => {
    // データが所属しているシステム
    const dataSystem = [...editDataSystems]

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