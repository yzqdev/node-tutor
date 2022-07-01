import * as cheerio from "cheerio";
import axios from "axios";
let starturi = "http://www.baidu.com";

axios.get(starturi).then((res) => {
  let $ = cheerio.load(res.data);
  let title = $("title").text();
  console.log(title);
});
