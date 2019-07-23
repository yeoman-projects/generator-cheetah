const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack-common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //creates our html index.html 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'zebra.min.[contenthash].js',
    },
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader, //css into files
                    'css-loader', //css into javascript
                    'sass-loader' //scss or sass into css
                ],
            },
        ]
    },
    plugins: [new MiniCssExtractPlugin({ filename: 'zebra.min.[contenthash].css' }),
    new CleanWebpackPlugin]
});