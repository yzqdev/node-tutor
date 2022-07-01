import * as cheerio from "cheerio";
import axios from "axios";

const response = await axios("https://www.douyin.com/", {
  method: "GET",
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36",
  },
});
const data = await response.data;

let $ = cheerio.load(data);
console.log($.html());
