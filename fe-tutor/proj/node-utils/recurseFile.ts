// 深层次遍历文件夹并输出markdown标题
import fs from "node:fs";
import path from "node:path";
import { exec } from "child_process";
import { DirPath } from "./interfaces";
function readFileList(dir: string, filesList: DirPath[] = []) {
  const files = fs.readdirSync(dir);
  let dirPath: DirPath = { name: path.resolve(dir).split("\\").pop(), files: [] };
  files.forEach((item, index) => {
    let fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && item != "res" && item != ".vuepress") {
      console.log(path.join(dir, item));
      console.log("files=", filesList);
      readFileList(path.join(dir, item), filesList); //递归读取文件
    } else {
      if (path.extname(item) == ".md") {
        dirPath.files.push(fullPath.split(path.sep).join("/"));
      }
      // filesList.push(fullPath.replace("\\", "/"));
    }
  });
  filesList.push(dirPath);
  return filesList;
}
let filesList: DirPath[] = [];
readFileList("./", filesList);
console.log("filelist=", filesList);
let md = "";
let head = path.resolve().split("\\").pop();
for (let link of filesList) {
  md += `\n## ${link.name}\n\n`;
  for (let file of link.files) {
    let data = fs.readFileSync(file);
    let pattern = /# [\S]{0,20}/;
    if (pattern.test(data.toString())) {
      md += `- [${data.toString().match(pattern)![0].slice(2)}](./${file})\n`;
    }
  }
}

let fileName = "README.md";
let finalMd = `# ${head}\n` + md;
try {
  const data = fs.writeFileSync(fileName, finalMd);
  //文件写入成功。
  console.log(`${fileName}创建成功`);
} catch (err) {
  console.error(err);
}
