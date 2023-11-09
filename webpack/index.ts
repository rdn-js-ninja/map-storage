import { Configuration } from "webpack";
import webpackNodeExternals from "webpack-node-externals";

import { TSettings } from "./types";
import {
    initCache,
    initDevtool,
    initEntries,
    initOptimizations,
    initPlugins,
    initResolve,
    initRules,
} from "./configurations";
import { initOutput } from "./configurations/output";

export const initDefaultConfig = (settings: TSettings): Configuration => {
    const { isDev } = settings;

    return {
        cache: initCache(settings),
        devtool: initDevtool(settings),
        entry: initEntries(settings),
        mode: isDev ? "development" : "production",
        module: {
            rules: initRules(),
        },
        optimization: initOptimizations(settings),
        output: initOutput(settings),
        plugins: initPlugins(),
        resolve: initResolve(settings),
        target: "web",
        watch: isDev,
        watchOptions: {
            ignored: [
                "**/node_modules",
                "**/lib",
                "**/package.json",
                "**/package-lock.json",
                "**/tsconfig.json",
            ],
        },
        externals: [webpackNodeExternals()],
    };
};
