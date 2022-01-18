import axios, { AxiosStatic } from "axios";
import { development } from "./development";

class AppConfig {
    constructor(param: configParam) {
        axios.defaults.baseURL = param.API_URL + "/" + param.VERSION;
        // axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    }

    get axios(): AxiosStatic {
        return axios;
    }

    doAPI<T>(apiMehod: T): void {
    }
}
const config = new AppConfig(development);

const MachinesAPI = {
    root: "machines",
    search: "search",
    show: "show",
    exchange: "exchange",
    edit_by_qr: "",

} as const;
type MachinesAPI = typeof MachinesAPI[keyof typeof MachinesAPI];

const SystemsAPI = {
    root: "system_masters",
    search: "search",
    show: "show",
    exchange: "exchange",
    edit_by_qr: "",

} as const;
type SystemsAPI = typeof SystemsAPI[keyof typeof SystemsAPI];

const ProductsAPI = {
    root: "products",
    search: "search",
    show: "show",
    exchange: "exchange",
    edit_by_qr: "",

} as const;
type ProductsAPI = typeof ProductsAPI[keyof typeof ProductsAPI];

const RouteList = {
    top: "/",
    machines: "/machines",
    companies: "/companies",
    products: "/products",
    systems: "/systems",
    users: "/users",
}
type RouteList = typeof RouteList[keyof typeof RouteList]

interface configParam {
    API_URL: string,
    VERSION: string,
}
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
    vender_id: number
    created_at: string
    updated_at: string
}


interface systemData {
    system_id: number,
    system_name: string,
    system_en_name: string,
    created_at: string,
    updated_at: string,
}
interface productData {
    product_id: number,
    product_name: string,
    model_number: string,
    prod_type: number,
    company_id: number,
    created_at: string,
    updated_at: string,
}

export { configParam };
export { config as appConfig };
export { MachinesAPI };
export { SystemsAPI };
export { ProductsAPI };
export { RouteList };
export { machineData };
export { systemData };
export { productData };
