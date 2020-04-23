const jsjson = require("./js.json");

let j = JSON.parse(JSON.stringify(jsjson));
for (const [k, v] of Object.entries(j)) {
  v.scope = "javascript,typescript";
}

console.log(j);
