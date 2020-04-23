// Const fetch = require(`whatwg-fetch`);
const jsdom = require(`jsdom`);
const { JSDOM } = jsdom;
const dom = new JSDOM(``, {
  url: `https://example.org/`,
  referrer: `https://example.com/`,
  contentType: `text/html`,
  userAgent: `Mellblomenator/9000`,
  includeNodeLocations: true
});
// Const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// Console.log(dom.window.document.querySelector(`p`).textContent); // "Hello world"
console.log(dom.window.URL.host);
