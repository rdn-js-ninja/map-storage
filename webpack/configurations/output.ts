import { join } from "path";
import pack from "../../package.json";

import { TSettings } from "../types";

export const initOutput = (setting: TSettings) => {
    const { pathDist } = setting;

    return {
        path: pathDist,
        filename: join("[name].js"),
        clean: true,
        libraryTarget: "umd",
        umdNamedDefine: true,
        library: {
            name: pack.name,
            type: "umd",
        },
        globalObject: "this",
        strictModuleErrorHandling: true,
        environment: {
            arrowFunction: false,
            bigIntLiteral: false,
            const: false,
            destructuring: false,
            dynamicImport: false,
            dynamicImportInWorker: false,
            forOf: false,
            globalThis: true,
            module: false,
            optionalChaining: false,
            templateLiteral: false,
        },
    };
};
