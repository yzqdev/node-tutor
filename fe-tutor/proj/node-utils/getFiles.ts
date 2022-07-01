// 遍历文件夹并生成标题
//getFiles.js
import fs from "node:fs";
import path from "node:path";
import { DirPath } from "./interfaces";

function readFileList(dir: string, filesList: DirPath[] = []) {
  const files = fs.readdirSync(dir);
  let dirPath: DirPath = { name: path.resolve().split("\\").pop(), files: [] };
  files.forEach((item, index) => {
    let fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    // console.log(path.extname(item));
    // console.log(fullPath);
    if (stat.isDirectory() || path.extname(item).toLowerCase() != ".md") {
      //   console.log("not markdown", item.toString());
    } else {
      let data = fs.readFileSync(fullPath).toString();
      let pattern: RegExp = /# [\S]{0,20}/;
      if (pattern.test(data)) {
        dirPath.files.push({
          content: data.match(pattern)![0].slice(2),
          filename: fullPath.replace("\\", "/"),
        });
      } else {
        console.log(fullPath);
        dirPath.files.push({
          content: fullPath.split(".")[0],
          filename: fullPath.replace("\\", "/"),
        });
      }

      // filesList.push(fullPath.replace("\\", "/"));
    }
  });
  filesList.push(dirPath);
  return filesList;
}
let filesList: any = [];
readFileList("./", filesList);
console.log(filesList);
let mdContent = "";
for (let link of filesList) {
  mdContent += `\n# ${link.name}\n\n## 目录\n\n`;
  for (let file of link.files) {
    mdContent += `- [${file.content}](./${file.filename})\n`;
  }
}

console.log(mdContent);
let fileName = "README.md";
try {
  const data = fs.writeFileSync(fileName, mdContent);
  //文件写入成功。
  console.log(`${fileName}创建成功`);
} catch (err) {
  console.error(err);
}
