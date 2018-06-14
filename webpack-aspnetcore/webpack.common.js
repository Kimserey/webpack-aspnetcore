const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: {
        app: './Scripts/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Util: 'exports-loader?Util!bootstrap/js/dist/util'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'wwwroot/lib')
    }
};