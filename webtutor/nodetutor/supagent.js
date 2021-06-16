const request = require('superagent');
const res = await request
    .get('https://example.com/h2')
    .http2();
