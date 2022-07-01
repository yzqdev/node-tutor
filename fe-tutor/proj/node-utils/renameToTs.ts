// 使用方法为：
// 把该文件复制到要修改文件名的目录下；
// 然后打开node.js执行node changeName.js命令；
// 修改完成！
// 可以在下面注释的地方自定义修改的逻辑；

import fs from "node:fs";
import path from "node:path";

let filePath = path.resolve("./files");

let shouldRenameExt = [".mjs", ".js", ".cjs"];

//调用文件遍历方法
fileDisplay(filePath);

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath: string) {
  //   console.log(8977)
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, function (err, files) {
    if (err) {
      console.warn(err);
    } else {
      //遍历读取到的文件列表
      files.forEach(function (filename) {
        //获取当前文件的绝对路径
        let filedir = path.join(filePath, filename);
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir, function (eror, stats) {
          if (eror) {
            console.warn("获取文件stats失败");
          } else {
            let isFile = stats.isFile(); //是文件
            let isDir = stats.isDirectory(); //是文件夹
            if (isFile) {
              console.log("dir =>", filedir);
              //这里请根据需要替换后缀名，我的是要把.blv替换成.flv

              if (shouldRenameExt.includes(path.extname(filedir))) {
                fs.rename(filedir, filedir.replace(path.extname(filedir), ".ts"), (err) => {
                  if (err) {
                    throw err;
                  }
                  console.log(`rename ${path.basename(filedir)} to ${path.basename(filedir.replace(path.extname(filedir), ".ts"))}`);
                });
              }
            }
            if (isDir) {
              fileDisplay(filedir); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          }
        });
      });
    }
  });
}
