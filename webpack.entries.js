const path = require('path')

const contentScripts = {
    example: path.join(__dirname, 'src/content/example/index.ts'),
}
const backgroundScript = path.join(__dirname, 'src/background/index.ts')
const popupScript = path.join(__dirname, 'src/popup/index.tsx')
const optionScript = path.join(__dirname, 'src/option/index.tsx')

module.exports = {
    contentScripts,
    backgroundScript,
    popupScript,
    entries: {
        ...contentScripts,
        background: backgroundScript,
        popup: popupScript,
        option: optionScript,
    },
}