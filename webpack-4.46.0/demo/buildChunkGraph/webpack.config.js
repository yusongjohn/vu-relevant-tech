const path = require('path')
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: {
        A1: './buildChunkGraph/A1.js',
        A2: './buildChunkGraph/A2.js'
    },
    // 出口文件配置项
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    optimization: {
        minimize: false,
        runtimeChunk: true,
    },
    plugins: [
        new CopyWebpackPlugin(['./buildChunkGraph/index.html'])
    ],
    mode: 'none',
    watch: true,
}