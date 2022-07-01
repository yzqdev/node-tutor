import { AbstractCommand } from "./abstractCommand";
import { Command } from "commander";
import chalk from "chalk";

export class DefaultOptions extends AbstractCommand {
  load(program: Command): void {
    program.option("-m, --message", "帮助").action(() => {
      console.log(chalk.red("输入tool -h查看帮助"));
    });
  }
}
