const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',  // точка входа
    output: {                                  // точка віхода
        path: path.resolve(__dirname, 'build'),
        filename: 'my-bandle.js',
    },
    module: {                             // загрузчики
        rules: [
         {
        test: /\.scss$/i,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      } 
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        new MiniCssExtractPlugin({filename: 'styles.css'}),

    ],
    devServer: {
        port: 4444,
        open: true,
        stats: 'errors-only'
    },
}