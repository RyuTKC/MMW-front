import axios, {AxiosStatic} from "axios";
// import * as a from "MMW";
const development: MMW.configParam = {
    API_URL: "http://localhost:3000",
    VERSION: "v1",
    CONTROLLER:{
        machines: {
            search: "search",
        },
        companies: {},
        system_masters:{},
        products:{}
    }
};

export { development };
