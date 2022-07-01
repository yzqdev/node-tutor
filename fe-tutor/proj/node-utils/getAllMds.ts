// 获取文件夹所有的md文件
//getFilename.mjs
import fs from "node:fs";
import path from "node:path";
function readFileList(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  let dirPath = { name: path.resolve().split("\\").pop(), files: [] };
  files.forEach((item, index) => {
    let fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    // console.log(path.extname(item));
    // console.log(fullPath);
    if (stat.isDirectory() || path.extname(item).toLowerCase() != ".md") {
      //   console.log("not markdown", item.toString());
    } else {
      filesList.push(fullPath.replace("\\", "/"));
    }
  });
  // filesList.push(dirPath);
  return filesList;
}
let filesList = [];
readFileList("./", filesList);
console.log(filesList);
fs.writeFile("filelist.txt", filesList.join(`\n`), { encoding: "utf-8" }, (err, data) => {
  if (err) {
  } else {
    console.log("success");
  }
});
