import { WebpackPluginInstance } from "webpack";

export const initPlugins = (): Array<WebpackPluginInstance> => {
    return [];
};

export { initTerserPlugin } from "./TerserPlugin";
