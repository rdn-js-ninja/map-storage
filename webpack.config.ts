import path from "path";

import { initDefaultConfig } from "./webpack";
import { TSettings } from "./webpack/types";
import { MAIN_PATH } from "./webpack/enums";

const SYSTEM_PATH = process.cwd();

const pathDev = path.join(SYSTEM_PATH, MAIN_PATH.DEV);
const pathDist = path.join(SYSTEM_PATH, MAIN_PATH.DIST);

const isDev = process.env["NODE_ENV"] === "development";

const defaultSettings: TSettings = {
    pathDev,
    pathDist,
    isDev,
};

const defaultConfig = initDefaultConfig(defaultSettings);

export default [defaultConfig];
