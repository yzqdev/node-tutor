var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

app.get('/', function (req, res, next) {
    superagent.get('https://cnodejs.org/')
        .end(function (err, sres) {
            if (err) {
                return next(err);
            }
            var $ = cheerio.load(sres.text);
            var items = [];
            $('#topic_list .topic_title').each(function (idx, element) {
                var $element = $(element);
                items.push({
                    title: $element.attr('title'),
                    href: $element.attr('href')
                });
            });
<<<<<<< HEAD
            var arr = []
            for (const iterator of items) {

                console.log(iterator.title);
                console.log(iterator.href);
            }
            res.send('get')

=======

            res.send(items);
>>>>>>> 90c11749a081961be86fb5b0f8db2113c6f3f642
        });
});


app.listen(3000, function () {
    console.log('app is listening at port 3000');
});
