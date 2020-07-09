const path = require('path');
const slsw = require('serverless-webpack');
const TSconfigPaths = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: slsw.lib.entries,
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    target: 'node',
    optimization: {
        minimize: false
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [new TSconfigPaths()]
    },
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js'
    }
};
