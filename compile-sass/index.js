/** sass编译 */
const path = require('path')
const sass = require('sass')

// const fs = fs.readFileSync('./index.scss')

const result = sass.compile(path.resolve(__dirname, './index.scss'))

console.log(result.css)
