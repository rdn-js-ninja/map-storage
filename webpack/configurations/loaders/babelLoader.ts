export const getBabelLoader = () => {
    return {
        loader: "babel-loader",
        options: {
            cacheDirectory: true,
            cacheCompression: false,
            presets: ["@babel/preset-env"],
        },
    };
};
