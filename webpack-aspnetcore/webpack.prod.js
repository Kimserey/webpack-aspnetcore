const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require("webpack");

module.exports = merge(common, {
    entry: {
        app: './Scripts/index.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.(scss)$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].bundle.css"
        }),
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
});