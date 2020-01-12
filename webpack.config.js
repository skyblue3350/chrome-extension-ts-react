var path = require('path');

module.exports = {
    mode: 'development',
    watch: true,
    entry: {
        popup: path.join(__dirname, 'src/popup/index.tsx'),
        background: path.join(__dirname, 'src/background/index.ts'),
        option: path.join(__dirname, 'src/option/index.tsx'),
    },
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
}
