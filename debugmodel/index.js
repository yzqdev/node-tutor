const debug = require(`debug`)(`http`);
const http = require(`http`),
  name = `My App`;

// Fake app

debug(`booting %o`, name);

http
  .createServer((req, res) => {
    debug(`${req.method} ${req.url}`);
    res.end(`hello\n`);
  })
  .listen(3000, () => {
    debug(`listening`);
  });

// Fake worker of some kind

require(`./worker`);
