import { createStore, combineReducers, applyMiddleware, type Action, } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router"
import { createBrowserHistory } from "history"
import { countReducer } from "./Counter/reducer";
import { countReducer as count2Reducer } from "./Counter2/reducer";
import thunk, { ThunkAction } from "redux-thunk";
import { machinesReducer } from "./Machines/reducer";
import { systemsReducer } from "./Systems/reducer";
import { productsReducer } from "./Products/reducer";
import { companiesReducer } from "./Companies/reducer";
import { enumsReducer } from "./Enums/reducer";

const history = createBrowserHistory()

// reducerの結合
const reducers = combineReducers({
    router: connectRouter(history),
    count: countReducer,
    count2: count2Reducer,
    machines: machinesReducer,
    systems: systemsReducer,
    products: productsReducer,
    companies: companiesReducer,
    enums: enumsReducer
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