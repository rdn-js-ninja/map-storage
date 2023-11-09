import { getBabelLoader } from "../loaders";

export const getJsRule = () => {
    return {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [getBabelLoader()],
    };
};
