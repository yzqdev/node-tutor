#!/usr/bin/env node
import * as commander from "commander";

import { CommandLoader } from "./commands/loader";

const bootstrap = () => {
  const program = new commander.Command();

  program
    .version(require("../package.json").version, "-v, --version", "当前版本.")
    .usage("<command> [options]")
    .helpOption("-h, --help", "如何使用");
  CommandLoader.load(program);
  program.parse(process.argv);

  if (!process.argv.slice(2).length) {
    program.outputHelp();
  }
};

bootstrap();
