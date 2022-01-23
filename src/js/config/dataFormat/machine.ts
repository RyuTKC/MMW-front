import { initialIpAddress, ipAddress } from "./ipAddress";
import { initialSystemData, systemData } from "./system";

interface machineData {
    machine_id: number
    machine_name: string
    administrator: string
    host_name: string
    place: string
    qr_or_barcode: string
    maintenance_date: string
    assurance: string
    serial_number: string
    purchase_date: string
    notes: string
    product_id: number
    status_type: number
    role_id: number
    ip_addresses: ipAddress[],
    systems: systemData[]
    vender_id: number
    created_at: string
    updated_at: string
}
const initialMachineData: machineData = {
    machine_id: -1,
    machine_name: "-",
    host_name: "-",
    administrator: "-",
    place: "-",
    qr_or_barcode: "-",
    maintenance_date: "-",
    assurance: "-",
    serial_number: "-",
    purchase_date: "-",
    notes: "-",
    product_id: -1,
    status_type: -1,
    ip_addresses: [initialIpAddress],
    systems: [initialSystemData],
    role_id: -1,
    vender_id: -1,
    created_at: "-",
    updated_at: "-"
}

export { machineData, initialMachineData };
