import path from "node:path";
import fs from "node:fs";
console.log(path.resolve().split("\\").pop());
console.log("abd");
let pattern = /# [\u4E00-\u9FA5A-Za-z0-9_]{0,20}/;
let data = fs.readFileSync("a.md").toString();
console.log(data.match(pattern)![0].slice(2));
