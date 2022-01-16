import { Action, ActionCreator } from "redux";
import { MachineTableActionType } from "./types";


export const updateAction: MachineTableActionType = {
  type: MachineTableActionType.update,
  sortElement: {
    orderBy: "",
    sortDirection: "asc"
  }
}

export const sortAction: MachineTableActionType = {
  type: MachineTableActionType.sort,
  sortElement:{
    orderBy: "",
    sortDirection: "asc"
  }
}