module.exports = {
    entry: __dirname + "/src/js/index.js",
    output: {
        path: __dirname + '/public/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js(x)?$/, loader: "jsx-loader?harmony" }
        ]
    }
};
