import { createStore, combineReducers, applyMiddleware, compose, } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router"
import { createBrowserHistory } from "history"
import { countReducer } from "./Counter/reducer";
import { countReducer as count2Reducer } from "./Counter2/reducer";
import * as H from "history"
import thunk from "redux-thunk";

const history = createBrowserHistory()

// reducerの結合
const reducers = combineReducers({
    router: connectRouter(history),
    count: countReducer,
    count2: count2Reducer
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

export type RootState = ReturnType<typeof reducers>         // === ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export { history };
export default store;

