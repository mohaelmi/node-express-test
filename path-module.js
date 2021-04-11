const path = require('path')

console.log(path.sep)

//return file path
const filePath = path.join('/content', 'subcontent', 'text.txt')
console.log(filePath)

//return the exactly file name
const base = path.basename(filePath)
console.log(base)

//return absolute file path
const absolute = path.resolve(__dirname, '/content', 'subcontent', 'text.txt')
console.log(absolute)