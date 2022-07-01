import * as fs from "fs";
import * as path from "path";
import { SingleDirPath } from "../interfaces/mdInterface";
import chalk from "chalk";
import shell from "shelljs";
import { WebpInterface } from "../interfaces";

export function genTxt(dir: string) {
  let files = fs.readdirSync(dir);

  let arr = [];
  for (let i of files) {
    arr.push(`"${encodeURIComponent(i)}"`);
  }

  fs.writeFileSync("arr.txt", `[${arr.join(",")}]`);
}
export function genName(dir: string) {
  let files = fs.readdirSync(dir);

  let arr = [];
  for (let i of files) {
    arr.push(`"${i}"`);
  }

  fs.writeFileSync("name.txt", arr.join("\n"));
}

export function deleteFileRecurse(ext: string, dir: string) {
  const files = fs.readdirSync(dir);

  files.forEach((item, index) => {
    let fullPath = path.join(dir, item);
    console.log(chalk.red(fullPath));
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && item != "res" && item != ".vuepress") {
      console.log("删除的路径");
      console.log(`进入文件夹:${path.join(dir, item)}`);
      deleteFileRecurse(ext, path.join(dir, item)); //递归读取文件
    } else {
      if (path.extname(item) == `.${ext}`) {
        fs.unlinkSync(path.join(dir, item));
      }
    }
  });
}
export function deleteByExtension(ext: string, dir: string = "./") {
  deleteFileRecurse(ext, dir);
}
export function toWebp(img: string, option: WebpInterface) {
  let reg = new RegExp(/(.jpg|.png|.jpeg|.gif|.bmp)$/);
  if (shell.which("cwebp")) {
    console.log(
      chalk.red(
        "你还没有安装cwebp! https://developers.google.cn/speed/webp/docs/cwebp"
      )
    );
  }
  let script = `cwebp.exe -q ${option.quality ?? 90} ${img} -o ${img?.replace(
    reg,
    ".webp"
  )}`;
  console.log(script);
  shell.exec(script);
  console.log(chalk.cyan("转换成功!"));
}
export function transferToWebp(dir: string, option: WebpInterface) {
  let files = fs.readdirSync(dir);

  for (let i of files) {
    if (fs.statSync(i).isFile() && path.extname(i) != ".webp") {
      toWebp(i, option);
    }
  }
}
