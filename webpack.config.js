var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin') 

module.exports = {
    target: 'web',
    devtool: 'cheap-eval-source-map',
    entry: {
       app: './main.js',
       vendor: ['react']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: `[name].[hash].js`
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }
        }, 
        {
            test: /\.(css|scss)/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|jpg|jpeg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({}),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            filename: 'index.html',
            favicon: path.join(__dirname, "dist", "icons", "icon_16.png"),
            inject: 'body',
            minify: {
                collapseWhitespace: true
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}