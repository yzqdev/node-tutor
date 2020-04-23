// ==UserScript==
// @name         Newscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// @require      https://cdn.bootcss.com/highlight.js/9.15.10/highlight.min.js
// @require      https://cdn.bootcss.com/highlightjs-line-numbers.js/2.7.0/highlightjs-line-numbers.min.js
// @match        https://www.html.cn/qa/*
// @grant        none
// ==/UserScript==

(function() {
  console.log(`hello`);
  $(`<link>`)
    .attr({
      rel: `stylesheet`,
      type: `text/css`,
      href: `https://cdn.bootcss.com/highlight.js/9.15.10/styles/monokai.min.css`
    })
    prompt("",'videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(5)')
    .appendTo(`head`);
  $(`pre`).css({ "font-family": `consolas` });

  $(`pre`).wrap(() => `<pre><code>${$(this).text()}</code></pre>`);
  hljs.initHighlightingOnLoad();
  $(`code.hljs`).each((i, block) => {
    hljs.lineNumbersBlock(block);
  });
  console.log(`finish`);
  // Your code here...
})();
