let path = require('path');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: "dist/"
    },

    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             loader: ExtractTextPlugin.extract('style-loader','css-loader')
    //         }
    //     ]
    // },
    //
    // plugins: [
    //     new ExtractTextPlugin('src/style.css'),
    //     new OptimizeCssAssetsPlugin ({
    //         assetNameRegExp:/\.css$/g,
    //         cssProcessor:require('cssnano'),
    //         cssProcessorPluginOptions:{
    //             preset:['default', {
    //                 discardComments:{
    //                     removeAll: true
    //                 }
    //             }]
    //         },
    //         canPrint:true
    //     })
    // ]
};

module.exports = conf;