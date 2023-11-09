import { resolve } from "path";

import { TSettings } from "../types";

export const initEntries = (setting: TSettings) => {
    const { pathDev } = setting;

    return {
        index: resolve(pathDev, "index.ts"),
    };
};
