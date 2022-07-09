import axios from 'axios'
import * as cheerio from 'cheerio'
import * as fs from 'fs'

export async function getPixiv() {
    let url = 'https://www.vilipix.com/ranking?date=20220707&mode=daily&p=' + 2
    let {data} = await axios.get(url,{
        headers:{
            'If-None-Match': "4649a-7KOxF4rY0IgLhSYuzTot81UpQDg",
            'Cookie': 'auth.strategy=local; Hm_lvt_7246eb56b79171a6fe5284a8bf523aa0=1657220255; Hm_lpvt_7246eb56b79171a6fe5284a8bf523aa0=1657222127'
        }
    })
    const body = cheerio.load(data)
    // fs.writeFileSync('a.html', body.html())
    let imgs = body('script').get()
    // fs.writeFileSync('a.js',imgs.html())
    console.log(url)
    console.log('pixiv dayli', imgs )
}
