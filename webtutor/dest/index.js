var jsdom = require("jsdom");
$ = require("jquery")(jsdom.jsdom().createWindow());
console.lo($);
const ids = [34112, 98325, 68125];
(function sendRequest() {
    const id = ids.shift();
    if (id) {
        $.ajax({ url: "/get", data: { id } }).always(function() {
            //do sth.
            console.log("finished");
            sendRequest();
        });
    } else {
        console.log("finished");
    }
})();
