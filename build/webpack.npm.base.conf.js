/**
 * @file webpack.npm.base.conf.js
 */

var path = require('path');

module.exports = {
    entry: {
        'xcui': './src/components/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
        filename: 'xcui.js',
        library: 'xcui',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'src': path.resolve(__dirname, '../src')
        }
    },
    stats: {
        children: false
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel!eslint',
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: '[name].[ext]?[hash:7]'
            }
        }]
    },
    vue: {
        loaders: {
            js: 'babel!eslint'
        }
    },
    eslint: {
        formatter: require('eslint-friendly-formatter')
    }
};
