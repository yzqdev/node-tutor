var cheerio = require('cheerio')
var request = require('request')
var starturi = 'http://www.baidu.com'

request(starturi, function (err, res) {
    if (err) {
        console.log(err);
    }
    var $ = cheerio.load(res.body)
    var title = $('title').text();
    console.log(title);
})
