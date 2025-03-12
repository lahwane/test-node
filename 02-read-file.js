// const fs = require('fs')
import fs from 'fs'

// demoSync()

function demoSync() {
    const content = fs.readFileSync('data/data.txt', 'utf8')
    console.log(content)
}


////////////////////////////////////////////////////

// demoAsync()

function demoAsync() {
    fs.readFile('data/data.txt', 'utf8', (err, content) => {
        if (err) return console.log('Cannot read file', err)
        console.log(content)
    })
}

////////////////////////////////////////////////////

// demoAsyncPrm()
//     .then(res => {
//         console.log('res:', res)
//     })
//     .catch(err => {
//         console.error(err)
//     })

function demoAsyncPrm() {
    return new Promise((resolve, reject) => {
        fs.readFile('data/data.txt', 'utf8', (err, content) => {
            if (err) return reject(err)
            resolve(content)
        })
    })
}
