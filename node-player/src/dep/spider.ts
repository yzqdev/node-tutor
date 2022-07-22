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
export async function getGenshin( role) {
    var url = `http://localhost:5400/daily/game_record/app/genshin/api/dailyNote?server=${role.Region}&role_id=${role.Uid}`;
    let headers = new Map();

    headers.set(`Cookie`, role.Cookie);
    headers.set(`DS`, "1657952960,139391,9b9f1eb550b883cc4e4692ced08541af");
    headers.set(
      `Referer`,
      "https://webstatic.mihoyo.com/app/community-game-records/?game_id=2&utm_source=bbs&utm_medium=mys&utm_campaign=box"
    );
    headers.set(`x_rpc_app_version`, "2.25.1");
    headers.set(`x_rpc_client_type`, "5");
    headers.set(`X_Reuqest_With`, "com.mihoyo.hyperion");
console.log(Object.fromEntries(headers.entries()));
    // data.Uid = role.Uid;
    // data.Nickname = role.Nickname;
    return axios.get(url, { headers: Object.fromEntries(headers.entries()) });
}