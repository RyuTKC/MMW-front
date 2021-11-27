import axios, { AxiosStatic } from "axios";
import path from "path";

import { development } from "./development";
// import { test } from "./test";
// import { production } from "./production";

class AppConfig {
    private _axios: AxiosStatic;

    constructor(param: MMW.configParam) {
        axios.defaults.baseURL = path.join(param.API_URL, param.VERSION);
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        this._axios = axios;
    }

    get axios(): AxiosStatic {
        return this._axios;
    }

}

const config = new AppConfig(development);

export { config as appConfig };
