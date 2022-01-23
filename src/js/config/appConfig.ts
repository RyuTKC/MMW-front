import axios, { AxiosStatic } from "axios";
import { development } from "./development";
import { machineData, initialMachineData } from "./dataFormat/machine";
import { systemData, initialSystemData } from "./dataFormat/system";
import { ipAddress, initialIpAddress } from "./dataFormat/ipAddress";
import { productData, initialProductData } from "./dataFormat/product"

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

export { configParam };
export { config as appConfig };
export { MachinesAPI };
export { SystemsAPI };
export { ProductsAPI };
export { RouteList };
export { machineData, initialMachineData };
export { ipAddress, initialIpAddress }
export { systemData, initialSystemData };
export { productData };
