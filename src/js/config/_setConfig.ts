// interface appConfig {
//     API_URL: string,
//     VERSION: string,
// }
import * as a from "MMW";

const development: appConfig = {
    API_URL: "http://localhost:3000",
    VERSION: "v1",
};

const test: appConfig = {
    API_URL: "http://localhost:3000",
    VERSION: "v1",
};

const production: appConfig = {
    API_URL: "http://localhost:3000",
    VERSION: "v1",
};


export { development as appConfig };