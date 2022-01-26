import { createStore, combineReducers, applyMiddleware, type Action, } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router"
import { createBrowserHistory } from "history"
import { countReducer } from "./Counter/reducer";
import { countReducer as count2Reducer } from "./Counter2/reducer";
import * as H from "history"
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { machineDataReducer } from "./MachineData/reducer";
import { systemDataReducer } from "./SystemData/reducer"
import { productDataReducer } from "./ProductData/reducer";

const history = createBrowserHistory()

// reducerの結合
const reducers = combineReducers({
    router: connectRouter(history),
    count: countReducer,
    count2: count2Reducer,
    machineData: machineDataReducer,
    systemData: systemDataReducer,
    productData: productDataReducer,
})

// ミドルウェアの統合
const middlewares = applyMiddleware(
    // storeと接続
    routerMiddleware(history),
    // 非同期処理用のミドルウェア
    thunk
)

// ストア生成関数
const storeCreator = () => {
    return createStore(
        reducers,
        middlewares
    )
}

// ストアの生成
const store = storeCreator()

// 全stateの型
export type RootState = ReturnType<typeof reducers>         // === ReturnType<typeof store.getState>
// 全thunkActionの型
export type AppThunkAction<MyActionType extends Action = Action, T = void> = ThunkAction<T, RootState, undefined, MyActionType>
export type AppDispatchType = typeof store.dispatch
export { history };
export default store;

