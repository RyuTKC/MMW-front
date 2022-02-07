import axios, { AxiosStatic } from "axios";
import { development } from "./development";
import {
  roleData, initialRoleData, isRoleData,
  statusData, initialStatusData, isStatusData,
  productTypeData, initialProductTypeData, isProductTypeData
} from "./dataFormat/enum"
import { machineData, machineSystem, initialMachineData, isMachineData, isMachineSystem } from "./dataFormat/machine";
import { systemData, initialSystemData, isSystemData } from "./dataFormat/system";
import { ipAddress, initialIpAddress, isIpAddress } from "./dataFormat/ipAddress";
import { productData, initialProductData, isProductData } from "./dataFormat/product"
import { companyData, initialCompanyData, isCompanyData } from "./dataFormat/company";

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
const CompaniesAPI = {
  root: "companies",
  search: "search",
  show: "show",
  exchange: "exchange",
  edit_by_qr: "",

} as const;
type CompaniesAPI = typeof CompaniesAPI[keyof typeof CompaniesAPI];

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

const isArray = <T>(target: any): target is T[] => {
  return Array.isArray(target);
}

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
const appConfig = new AppConfig(development);


export { configParam };
export { appConfig, isArray };
export { MachinesAPI, SystemsAPI, ProductsAPI, CompaniesAPI };
export { RouteList };
export { roleData, initialRoleData, isRoleData };
export { statusData, initialStatusData, isStatusData };
export { productTypeData, initialProductTypeData, isProductTypeData };
export { machineData, machineSystem, initialMachineData, isMachineData, isMachineSystem };
export { ipAddress, initialIpAddress, isIpAddress }
export { systemData, initialSystemData, isSystemData };
export { productData, initialProductData, isProductData };
export { companyData, initialCompanyData, isCompanyData };
