import { RootState } from "reducks/store";
import { createSelector } from "reselect";
import { MachineTableState } from "./types";

const machineDataSelector = (state: MachineTableState) => state

export const getColumns = createSelector(
  [machineDataSelector],
  state => state.tableData.columnDisplayName
);
