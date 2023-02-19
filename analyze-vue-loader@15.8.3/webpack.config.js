const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const {VueLoaderPlugin} = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     loader: path.resolve(__dirname, './customLoaders/custom-js-loader')
            // },
            // {
            //     test: /\.css$/,
            //     loader: path.resolve(__dirname, './customLoaders/custom-css-loader')
            // },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    optimization: {
        runtimeChunk: true
    },
    devtool: "cheap-source-map",
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin([
            {from: './src/index.html', to: '.'}
        ]),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new VueLoaderPlugin()
    ]
};