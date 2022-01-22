import { RootState } from "reducks/store";
import { createSelector } from "reselect";
import { SystemTableStateType } from "./types";

const machineDataSelector = (state: SystemTableStateType) => state

export const getColumns = createSelector(
  [machineDataSelector],
  state => state.columnDisplayName
);
