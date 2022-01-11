import { connectRouter, routerMiddleware } from "connected-react-router"
import { createBrowserHistory } from "history"
import countReducer from "./Counter3/slice";
import { configureStore, MiddlewareArray, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import * as H from "history"
import thunk from "redux-thunk";

// routerRedux
const history = createBrowserHistory()
const router = connectRouter(history)

// reducerの結合
const reducers = combineReducers({
  router: router,
  count3: countReducer
})

// ミドルウェアの統合
const middlewares = [
  // storeと接続
  routerMiddleware(history),
] as const

// const middlewares = new MiddlewareArray().concat(
//   // storeと接続
//   routerMiddleware(history),
// )

// ストアの生成
const store = configureStore({
  reducer: reducers,
  middleware: middlewares
})


export type RootStateType = ReturnType<typeof reducers>         // === ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export { history };
export default store;

