const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack-common');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //creates our html index.html 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'zebra.[name].js',
    },
    devtool: 'source-map',
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
        new MiniCssExtractPlugin({ filename: 'zebra.css'}),
        new CleanWebpackPlugin,
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
});