import { createStore, combineReducers } from "redux";
import { countReducer } from "./Counter/reducer";

const rootReducer = combineReducers({
    count: countReducer
})
const store= createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>
export default store;

