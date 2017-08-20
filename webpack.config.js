const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: './app/index.js',
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },

    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        inline: true,
        hot: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.html"
        })
    ],
}
