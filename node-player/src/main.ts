// import { startDownload } from "./dep/downloadService";
import {deps} from "./dep/index";
import {getGenshin, getPixiv} from "./dep/spider";
import got  from 'got'
import { getPypi, getSteamData, useAxios } from "./fetchData";
 
async function  bootstrap() {
 await getPypi('url')
//  await useAxios()
//  getSteamData("https://dldir1.qq.com/qqfile/qq/PCQQ9.6.2/QQ9.6.2.28760.exe");
  // startDownload()
  // deps.getDeps()
  // getPixiv().then(r => {
  //   console.log(r)
  // })
}
bootstrap()
