const { readFileSync, writeFileSync } = require( 'fs' )

//read text.txt file
const text = readFileSync('./content/subcontent/text.txt', 'utf8')
console.log(text)

//read file1 and file2
const file1 = readFileSync('./content/file1.txt', 'utf8')
const file2 = readFileSync('./content/file2.txt', 'utf8')

//ovaride new text in file3, if its not found will create automatically  
writeFileSync( './content/sync-result.txt', `here is the result: ${file1}, ${file2}`)

//add new text new file3
writeFileSync( './content/sync-result.txt', 'added new some text', {flag: 'a'})
