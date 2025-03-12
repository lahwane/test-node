import fs from 'fs'
import { utilService } from "./services/util.service.js"

const url1 = 'https://yesno.wtf/assets/yes/14-b57c6dc03aa15a4b18f53eb50d6197ee.gif'
const url2 = 'https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif'

const downloadDir = './downloads'
if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir)
}

// utilService.download(url1, 'downloads/yes.gif')
//     .then(() => {
//         console.log('Download successfully!')
//     })


const items = [
    {
        name: 'Item1',
        url: url1
    },
    {
        name: 'Item2',
        url: url2
    }
]

const itemPrms = items.map(item => {
    return utilService.download(item.url, `downloads/${item.name}.gif`)
})


Promise.all(itemPrms)
    .then(() => {
        const paths = fs.readdirSync('./downloads', 'utf8')
        console.log('All Resolved!', paths);
    })
    .catch(err => {
        console.log('err:', err)
    })

