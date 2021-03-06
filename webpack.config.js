var path = require('path');

module.exports = {
    mode: 'development',
    entry: './source/main.js',
    output: {
        library: 'Component',
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/nv-component-loader.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                options:
                {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    }, devServer: {
        historyApiFallback: {
            index: 'index.html'
        }
    }
};