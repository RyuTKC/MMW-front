import { RootState } from "reducks/store";
import { createSelector } from "reselect";
import linq from "linq"
import { initialProductData, productData } from "appConfig";
import memoize from "lodash.memoize";

const editDataProductSelector = (state: RootState) => state.products.datas
// const productSelector = (state: RootState) => state.productData

// radioButton用データ加工
export const convertCheckRadioProducts = createSelector(
  [editDataProductSelector],
  (editDataProducts) => {

    // チェックボックス、ラジオボタン用の型定義
    type checkRadioType = {
      // 扱いやすいようにproduct_idをkeyにする
      [product_id: number]: {
        main_flg: boolean
        used: boolean
      } & productData
    }

    // データが所属しているシステム
    const dataProduct= editDataProducts

    // チェックボックスラジオボタン用のオブジェクト生成
    const checkRadioObject: checkRadioType = {}

    // ボタン用のオブジェクトを配列に直して返却
    return Object.values(checkRadioObject)
  }
)