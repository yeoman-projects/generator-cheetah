const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack-common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = merge(common, {
    output: {
        path: path.join(__dirname, '/release'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                MiniCssExtractPlugin.loader, //inject into dom 
                  'css-loader', //css into javascript
                  'sass-loader' //scss or sass into css
                ],
              },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'zebra.css' }),
        new CleanWebpackPlugin
    ]
});