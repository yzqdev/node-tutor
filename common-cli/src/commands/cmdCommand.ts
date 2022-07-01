import { AbstractCommand } from "./abstractCommand";
import { Command } from "commander";
import { npmActions, yarnActions } from "../actions/cmds";

export class CmdCommand extends AbstractCommand {
  load(program: Command): void {
    let cmdCommand = program.command("cmd").description("显示常用的cmd命令");
    cmdCommand
      .command("yarn")
      .description("yarn常用操作")
      .action(() => {
        yarnActions();
      });
    cmdCommand
      .command("npm")
      .description("npm常用操作")
      .action(() => {
        npmActions();
      });
  }
}
