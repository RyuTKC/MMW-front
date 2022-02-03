import { RootState } from "reducks/store";
import { createSelector } from "reselect";
import linq from "linq"
import { initialSystemData, systemData } from "appConfig";
import memoize from "lodash.memoize";

const editDataSystemSelector = (state: RootState) => state.machineData.editElement.data.systems
const systemSelector = (state: RootState) => state.systemData

// radioButton用データ加工
export const convertCheckRadioSystems = createSelector(
  [editDataSystemSelector, systemSelector],
  (editDataSystems, systems) => {

    // チェックボックス、ラジオボタン用の型定義
    type checkRadioType = {
      // 扱いやすいようにsystem_idをkeyにする
      [system_id: number]: {
        main_flg: boolean
        used: boolean
      } & systemData
    }

    // データが所属しているシステム
    const dataSystem= editDataSystems

    // チェックボックスラジオボタン用のオブジェクト生成
    const checkRadioObject: checkRadioType = {}

    // 取得した全システムでボタン用オブジェクトを初期化
    Object.values(systems.data).map((v, i) => {
      checkRadioObject[v.system_id]={
        ...v,
        
        main_flg: false,
        used: false,
      }
    })

    // 所属しているシステムの状態をボタン用オブジェクトに反映
    dataSystem.map((v,i)=>{
      checkRadioObject[v.system_id]={
        ...checkRadioObject[v.system_id],

         main_flg: v.main_flg,
         used: true
        }
    })

    // ボタン用のオブジェクトを配列に直して返却
    return Object.values(checkRadioObject)
  }
)