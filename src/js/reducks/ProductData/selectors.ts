import { RootStateType } from "reducks/store";
import { createSelector } from "reselect";
import { ProductTableStateType } from "./types";

const machineDataSelector = (state: ProductTableStateType) => state

export const getColumns = createSelector(
  [machineDataSelector],
  state => state.columnDisplayName
);
