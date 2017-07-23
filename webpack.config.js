const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './src/main.js',
    output: {
        path: './public/dist',
        publicPath: '/dist/',
        filename: 'app.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    devServer: {
        inline: true,
        contentBase: './public',
        port: 8100
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
            }, {
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            }, {
                test: /\.jsx*$/,
                exclude: [/node_modules/, /.+\.config.js/],
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }, {
                test: /\.(jpe?g|gif|png|svg)$/i,
                loader: 'url-loader?limit=10000',
            }, {
                test: /\.json$/,
                loader: 'json-loader',
            },
        ],

    },

}