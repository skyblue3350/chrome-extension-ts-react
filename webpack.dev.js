const merge = require('webpack-merge')
const ExtensionReloader = require('webpack-extension-reloader')
const common = require('./webpack.common.js')
const entries = require('./webpack.entries')

module.exports = merge(common, {
    mode: 'development',
    watch: true,
    plugins: [
        new ExtensionReloader({
            entries: {
                background: 'background',
                options: 'option',
                popup: 'popup',
                contentScript: Object.keys(entries.contentScripts),
            },
        }),
    ]
});
