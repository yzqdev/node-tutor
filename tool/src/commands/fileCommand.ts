import { AbstractCommand } from "./abstractCommand";
import { Command } from "commander";
import { deleteByExtension, genName, genTxt, renameToTs, toWebp, transferToWebp } from "../actions/file";
import fs from "fs";
import crypto from "crypto";
import pc from "picocolors";
import shell from "shelljs";
import * as path from "path";
import { WebpInterface } from "../interfaces";

export class FileCommand extends AbstractCommand {
  load(program: Command): void {
    let fileCmd = program.command("file").description("一些文件操作");

    fileCmd
      .command("txt")
      .description("生成文本文件")
      .action(() => {
        genTxt("./");
      });
    fileCmd
      .command("name")
      .description("打印名字")
      .action(() => {
        genName("./");
      });
    fileCmd
      .command("rename")
      .description("转为ts")
      .action(() => {
        renameToTs("./");
      });
    fileCmd
      .command("md5 <file>")
      .description("获取md5")
      .action((file) => {
        const buffer = fs.readFileSync(file);
        const hash = crypto.createHash("md5");
        // @ts-ignore
        hash.update(buffer, "utf8");
        const md5 = hash.digest("hex");
        console.log(pc.cyan(md5));
      });
    fileCmd
      .command("rm <ext> [dirPath]")
      .description("删除文件夹内某类型的文件: ext可以是 js, md, go, ts等等")
      .action((ext, dirPath) => {
        deleteByExtension(ext, dirPath);
      });
    fileCmd
      .command("webp [img]")
      .description("图片转换为webp")
      .option("-q, --quality")
      .action((img: string, option: WebpInterface) => {
        console.log(img);
        if (img) {
          toWebp(img, option);
        } else {
          console.log("没有参数");
          transferToWebp(path.resolve(), option);
        }
      });
  }
}
