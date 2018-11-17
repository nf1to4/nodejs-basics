const fs = require('fs')
const path = require('path')

const file = 'test/text2.txt'

fs.readFile(file, 'utf8', (err, data) => {
    console.log(data.toString());
    if(!fs.existsSync('./temp')){
        fs.mkdirSync('./temp')
    }

    fs.writeFile('temp/text2.txt', data.toString() + 'foo', err => console.log('Done'))
})