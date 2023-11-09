import { TSettings } from "../types";

import { initTerserPlugin } from "./plugins";

import webpack from "webpack";

export const initOptimizations = (
    settings: TSettings
): Required<webpack.Configuration>["optimization"] => {
    const { isDev } = settings;

    return {
        minimize: !isDev,
        minimizer: isDev ? [] : [initTerserPlugin()],
    };
};
