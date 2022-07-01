import { AbstractCommand } from "./abstractCommand";
import { Command } from "commander";
export class TestCommand extends AbstractCommand {
  load(program: Command): void {
    let test = program
      .command("test <option>")
      .option("-r, --ret")
      .action(async (option) => {
        console.log(option);
      });

    test.command("md").action(() => {
      console.log("md");
    });

    // program
    //   .command("test <source> [destination]")
    //   .description("clone a repository into a newly created directory")
    //   .action((source, destination) => {
    //     console.log("clone command called");
    //   });
  }
}
