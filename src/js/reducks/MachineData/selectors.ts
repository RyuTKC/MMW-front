import { RootStateType } from "reducks/store";
import { createSelector } from "reselect";
import { MachineTableStateType } from "./types";

const counter2Selector = (state: MachineTableStateType) => state

export const getCount2Value = createSelector(
  [counter2Selector],
  state => state.sortData
);
