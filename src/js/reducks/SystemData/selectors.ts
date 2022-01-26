import { RootState } from "reducks/store";
import { createSelector } from "reselect";
import { SystemTableState } from "./types";

const machineDataSelector = (state: SystemTableState) => state

export const getColumns = createSelector(
  [machineDataSelector],
  state => state.columnDisplayName
);
