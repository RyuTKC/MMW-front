import { RootState } from "reducks/store";
import { createSelector } from "reselect";
import { CountStateType } from "./types";

const counter2Selector = (state: CountStateType) => state

export const getCount2Value = createSelector(
  [counter2Selector],
  state => state.value
);
