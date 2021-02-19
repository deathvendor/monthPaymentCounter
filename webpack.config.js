const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

if (module.hot) {
    module.hot.accept();
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    mode: 'development',
    entry: './index.js',
    output: {
        filename: './scripts/[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({template: 'index.html', filename: 'index.html'}),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/data'),
                    to: path.resolve(__dirname, 'dist/data'),
                },
                {
                    from: path.resolve(__dirname, 'src/styles'),
                    to: path.resolve(__dirname, 'src/styles'),
                },
            ]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', {loader: 'css-loader', options: {sourceMap: true,}}, 'postcss-loader']
            }
        ]
    },
    devServer: {
        open: true,
        port: 4300, 
        disableHostCheck: true,
        publicPath: 'http://localhost:4300/',
        hot: true,
        historyApiFallback: true,
    },
}