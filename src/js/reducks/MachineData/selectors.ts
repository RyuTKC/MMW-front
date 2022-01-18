import { RootStateType } from "reducks/store";
import { createSelector } from "reselect";
import { MachineTableStateType } from "./types";

const machineDataSelector = (state: MachineTableStateType) => state

export const getColumns = createSelector(
  [machineDataSelector],
  state => state.columnDisplayName
);
