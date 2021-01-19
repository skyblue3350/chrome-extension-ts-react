const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const packageJson = require('./package.json')
const entries = require('./webpack.entries').entries

module.exports = {
    entry: entries,
    output: {
        path: path.join(__dirname, 'build/js'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
            },
            {
                test: /\.(css)$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ],
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: {
                    publicPath: 'js/'
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader'
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/manifest.json'),
                    to: path.resolve(__dirname, './build/'),
                    transform: function (content, path) {
                        return content.toString()
                            .replace(/{{ NAME }}/g, packageJson.name)
                            .replace(/{{ VERSION }}/g, packageJson.version)
                            .replace(/{{ DESCRIPTION }}/g, packageJson.description)
                    },
                },
                {
                    from: path.resolve(__dirname, './src/icon.png'),
                    to: path.resolve(__dirname, './build/'),
                },
                {
                    from: path.resolve(__dirname, './src/popup.html'),
                    to: path.resolve(__dirname, './build/')
                },
                {
                    from: path.resolve(__dirname, './src/option.html'),
                    to: path.resolve(__dirname, './build/')
                }
            ],
        }),
    ],
    performance: {
        hints: false
    }
}
