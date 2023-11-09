import { join } from "path";

import { TSettings } from "../types";

export const initResolve = (settings: TSettings) => {
    const { pathDev } = settings;

    return {
        extensions: [".ts"],
        alias: {
            src: join(pathDev, "./src"),
        },
    };
};
