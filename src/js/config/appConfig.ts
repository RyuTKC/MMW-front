import axios, { AxiosStatic } from "axios";
import { MachinesAPI } from "./commonConfig"
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

export { config as appConfig };
export { MachinesAPI as MachinesAPI };
