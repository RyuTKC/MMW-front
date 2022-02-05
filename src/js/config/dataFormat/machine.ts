import { companyData, initialCompanyData } from "./company";
import { initialIpAddress, ipAddress } from "./ipAddress";
import { initialProductData, productData } from "./product";
import { initialSystemData, isSystemData, systemData } from "./system";

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
    product: productData
    status_type: number
    role_id: number
    ip_addresses: ipAddress[]
    systems: machineSystem[]
    vender: companyData
    created_at: string
    updated_at: string
}

type machineSystem = ({
    main_flg: boolean,
} & systemData)

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
    product: initialProductData,
    status_type: -1,
    ip_addresses: [initialIpAddress],
    systems: [{
        ...initialSystemData,
        main_flg: false
    }],
    role_id: -1,
    vender: initialCompanyData,
    created_at: "-",
    updated_at: "-"
}


// type guard関数
const isMachineData = (target: any): target is machineData => {
    return target.machine_id !== undefined
}
const isMachineSystem = (target: any): target is machineSystem => {
    return target.main_flg !== undefined && isSystemData(delete target.main_flg)

}

export { machineData, machineSystem, initialMachineData, isMachineSystem, isMachineData };
