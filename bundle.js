const concat = require('concat');
(async function build() {
    const files = [
        './dist/runtime.js',
        './dist/polyfills.js',
        './dist/main.js',
        './kcm-tag.js'
    ]
    await concat(files, './Test/kcm-survey.js');
})()
