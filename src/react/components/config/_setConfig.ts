import confTemplate from "./config";
import {default as development} from "./develepment.config";
import {default as test} from "./test.config";
import {default as production} from "./production.config";

let appConfig: confTemplate = development

export {appConfig as appConfig};