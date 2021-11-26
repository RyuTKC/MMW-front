import axios, {AxiosStatic} from "axios";



declare interface configTemp {
    API_URL: string,
    VERSION: string,
    axios: AxiosStatic
}


const development: configTemp = {
    API_URL: "http://localhost:3000",
    VERSION: "v1",
    axios: axios
};

const test: configTemp = {
    API_URL: "http://localhost:3000",
    VERSION: "v1",
    axios: axios
};

const production: configTemp = {
    API_URL: "http://localhost:3000",
    VERSION: "v1",
    axios: axios
};


export { development as appConfig, };
