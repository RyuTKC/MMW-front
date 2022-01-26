interface systemData {
    system_id: number,
    system_name: string,
    system_en_name: string,
}

const initialSystemData: systemData = {
    system_id: -1,
    system_name: "-",
    system_en_name: "-",
}

export { systemData, initialSystemData };
