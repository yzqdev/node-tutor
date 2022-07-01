// 在每个文件夹里都生成一个README.md文件(.vuepress文件夹除外)
//操作文件
/*
  1、fs.stat 获取文件状态
  2、fs.readdir 读取文件夹数据
  3、fs.access 判断文件夹是否存在
  4、path.join 拼路径
*/
//操作文件
import fs from "node:fs";
//操作路径
import path from "node:path";
//1.接受命令行命令
//3.判断路径是否存在
//2.修正路径
let inputPath = "./"; //[2]是输入的路径名
if (!inputPath) {
  //判断有没有输入内容
  throw "请输入文件名！";
}
//转换路径格式为绝对路径
inputPath = path.resolve(inputPath);
//输入的路径存在就执行递归
try {
  //扩展：'.F_OK'==='检查目录中是否存在文件'
  //'.R_OK'==='检查文件是否可读',详细见nodejs文档
  //也可以这样写 ：判断是否存在，以及是否可读
  //fs.accessSync(inputPath,fs.constants.F_OK|fs.constants.R_OK);
  //这里的 fs.constants.F_OK 是默认值，不用写
  fs.accessSync(inputPath);
  genReadmeFiles(inputPath);
} catch (err) {
  console.log(err);
}

function genReadmeFiles(filePath: string) {
  let state = fs.statSync(filePath);
  if (state.isFile()) {
    //是文件
    // console.log(filePath);
  } else if (state.isDirectory() && !filePath.includes("vuepress")) {
    //是文件夹
    //先读取

    if (fs.existsSync(path.resolve(filePath, "README.md"))) {
      console.log(`${filePath}已经有readme了`);
    } else {
      let fileName = "README.md";
      fs.writeFileSync(path.join(filePath, fileName), "# " + filePath.split("\\").pop());
    }
    let files = fs.readdirSync(filePath);
    files.forEach((file) => {
      //   console.log(path.join(filePath, file) + "，file");

      genReadmeFiles(path.join(filePath, file));
    });
  }
}
