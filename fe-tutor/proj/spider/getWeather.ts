import * as cheerio from "cheerio";
import fs from "node:fs";
import * as util from "util";
import https from "node:https";
let html = "";

let list: string[] = [],
  buffer = null;
let newslist: string[] = [];
let url = "https://www.yidaiyilu.gov.cn/";
let req = https.request("https://www.yidaiyilu.gov.cn/", function (res) {
  res.on("data", function (data) {
    list.push(data);
  });
  res.on("end", function () {
    buffer = Buffer.concat(list);
    html = buffer.toString();
    let $ = cheerio.load(html);
    console.log($.html());
    for (let i = 1; i <= 3; i++) {
      let dlist = `.con_yw_${i}`;
      $(".mybox .main-1")
        .find(dlist)
        .find("a")
        .each((index, ele) => {
          let txt = $(ele).text();
          let alink = $(ele).attr("href");
          let news = {};
          news["title"] = txt;
          news["url"] = url.substring(0, url.length - 1) + alink;
          newslist.push(news);
        });
    }
    console.log(newslist);
  });
});
req.end();
