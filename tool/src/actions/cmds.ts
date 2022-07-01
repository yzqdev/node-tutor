import Table from "cli-table";
import { yarnCmd } from "../constants/strs";
export function yarnActions() {
  let table = new Table({
    colWidths: [40, 30],
    rows: yarnCmd,
  });

  console.log(table.toString());
}
export function npmActions() {
  let table = new Table({ rows: yarnCmd });

  console.log(table.toString());
}
