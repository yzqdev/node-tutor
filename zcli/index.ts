import banner from "./src/banner";
import { cac } from "cac";
import yaml from "js-yaml";
import fs from "node:fs";
let cli = cac("zcli");
cli
  .command("build [dir]", "desc")
  .option("--env <env>", "Set envs")
  .option("--foo <value>", "Set foo bar")
  .example("--env xxx")
  .action((dir, options) => {
    console.log(dir, options);
    try {
      const doc = yaml.load(fs.readFileSync(dir, "utf8"));
      console.log(doc);
    } catch (e) {
      console.log(e);
    }
  });

cli.help();

cli.parse();
