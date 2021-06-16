var dom = `<ul id="fruits">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li class="pear">Pear</li>
</ul>`
var cheerio = require('cheerio')
$ = cheerio.load(dom)
console.log($('.apple', '#fruits').text());
console.log($.html());
