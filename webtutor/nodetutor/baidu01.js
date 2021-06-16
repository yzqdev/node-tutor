var express = require('express')
var app = express();
app.get('/api/:id/next/:name', function (req, res) {
    res.send(req.params.id + req.params.name); //放回 json 数组
});
app.listen(3000);
console.log('listening to port 3000');
