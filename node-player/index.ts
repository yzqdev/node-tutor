// import { startDownload } from "./dep/downloadService";
import {deps} from "./dep/index";
import {getGenshin, getPixiv} from "./dep/spider";


private let APISalt = "xV8v4Qu54lUKrEYFZkJhB8cuOh9Asafs";

export function  Create( queryUrl,  postBody)
{
    //unix timestamp
   let t = dayjs().utcOffset()
    //random
   let r = getRndInteger(100000, 200000);
    //body
    let  b = postBody   ? "" :JSON.stringify(postBody);
    //query
   let  q = "";
   let urlParts = queryUrl.Split('?');
    if (urlParts.Length == 2)
    {
       let  queryParams = urlParts[1].Split('&').OrderBy(x => x).ToArray();
        q = string.Join("&", queryParams);
    }
    //check
    string check = GetComputedMd5($"salt={APISalt}&t={t}&r={r}&b={b}&q={q}");

    return $"{t},{r},{check}";
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function  bootstrap() {
 
  // startDownload()
  // deps.getDeps()
  // getPixiv().then(r => {
  //   console.log(r)
  // })
}
bootstrap()
