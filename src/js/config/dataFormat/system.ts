interface systemData {
    system_id: number,
    system_name: string,
    system_en_name: string,
    created_at: string,
    updated_at: string,
}

const initialSystemData: systemData = {
    system_id: -1,
    system_name: "-",
    system_en_name: "-",
    created_at: "-",
    updated_at: "-"
}

export { systemData, initialSystemData };
