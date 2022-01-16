import { machineData } from "appConfig";
import { Action } from "redux";


// sort Type
const sortType={
	asc: "asc",
	desc: "desc" 
} as const
type sortType = keyof typeof sortType

// State Type
type MachineTableStateType = {
	data: machineData[],
	sortData: machineData[],
	orderBy: string,
	sortDirection: sortType
}
// Action Type
const MachineTableActionType = {
	update: "UPDATE",
	sort: "sort",
} as const;
// type CountActionType = Action & {
// 	type: typeof CountActionType[keyof typeof CountActionType]
// }
type MachineTableActionType = Action<typeof MachineTableActionType[keyof typeof MachineTableActionType]> & {
	sortElement: {
		orderBy: string,
		sortDirection: sortType
	}
}

export { MachineTableStateType, MachineTableActionType }