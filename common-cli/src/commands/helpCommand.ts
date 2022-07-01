import { AbstractCommand } from "./abstractCommand";
import { Command } from "commander";
import chalk from "chalk";

export class HelpCommand extends AbstractCommand {
  load(program: Command): void {
    program.command("help").action(() => {
      console.log(chalk.red("输入tool -h查看帮助"));
    });
  }
}
