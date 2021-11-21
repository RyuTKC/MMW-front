interface appConfig {
  API_URL: string,
  VERSION: string,
  
}


declare module "appConfig" {
  export function parseMetaData(
    API_URL: string,


  );
}