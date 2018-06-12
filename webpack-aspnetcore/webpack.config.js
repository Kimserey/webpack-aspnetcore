const path = require('path');

module.exports = {
    entry: {
        app: './Scripts/index.js'
    },
    mode: 'production',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'wwwroot/lib')
    },
    module: {
        rules: [{
            test: /\.(scss)$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]
        }]
    }
};