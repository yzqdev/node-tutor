var fs = require("fs");
var data = fs.readFileSync('input.tt', 'utf-8')
fs.readFile('input.txt', function (err, data) {
    if (err) {
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});
console.log("程序执行完毕");
