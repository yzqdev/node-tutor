import chalk from "chalk";
import { Command } from "commander";
import { TestCommand } from "./testCommand";
import { DefaultOptions } from "./defaultOptions";
import { MarkCommand } from "./markCommand";
import { HelpCommand } from "./helpCommand";
import { RegCommand } from "./regCommand";
import { FileCommand } from "./fileCommand";
import { CmdCommand } from "./cmdCommand";

export class CommandLoader {
  public static load(program: Command): void {
    new DefaultOptions().load(program);
    new HelpCommand().load(program);
    new TestCommand().load(program);
    new MarkCommand().load(program);
    new RegCommand().load(program);
    new FileCommand().load(program);
    new CmdCommand().load(program);
    this.handleInvalidCommand(program);
  }

  private static handleInvalidCommand(program: Command) {
    program.on("command:*", () => {
      console.error(
        `\n Invalid command: ${chalk.red("%s")}`,
        program.args.join(" ")
      );
      console.log(`输入${chalk.red("--help")}查看命令  \n`);
      process.exit(1);
    });
  }
}
