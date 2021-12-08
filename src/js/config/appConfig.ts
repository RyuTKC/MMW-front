import axios, { AxiosStatic } from "axios";
import { development } from "./development";


class AppConfig {
    constructor(param: MMW.configParam) {
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

const defaultMachine: Readonly<MMW.machineData> = {
    machine_id: -1,
    machine_name: "",
    administrator: "",
    host_name: "",
    place: "",
    qr_or_barcode: "",
    maintenance_date: "",
    assurance: "",
    serial_number: "",
    purchase_date: "",
    notes: "",
    product_id: -1,
    status_type: -1,
    role_id: -1,
    vender_id: -1,
    created_at: "",
    updated_at: ""

} as const

export { config as appConfig };
export { defaultMachine as defaultMachine }
export { MachinesAPI as MachinesAPI };
export { SystemsAPI as SystemsAPI };
export { ProductsAPI as ProductsAPI };
export { RouteList as RouteList }
