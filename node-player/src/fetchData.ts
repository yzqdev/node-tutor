import { promisify } from "node:util";
import stream from "node:stream";
import fs from "node:fs";
import got from "got";
import cliProgress from "cli-progress";
import { resolve, basename } from "path";
import axios from "axios";
const pipeline = promisify(stream.pipeline);

export interface ProgressEventData {
  percent: number;
  transferred: number;
  total: number;
}
export async function getSteamData(url: string) {
    const bar1 = new cliProgress.SingleBar(
      {},
      cliProgress.Presets.shades_classic
    );

    bar1.start(100, 0);
    function downloadProgress(e: ProgressEventData) {
      bar1.update(e.percent * 100, { filename: "test1.txt" });

      if (e.percent >= 1) {
        console.log("下载完成", e.percent * 100);

        bar1.stop();
      }
      // update the current value in your application..
    }
  await pipeline(
    got.stream(url).on("downloadProgress", downloadProgress),
    fs.createWriteStream(resolve("files", basename(url)))
  );
  console.log('success');

  // For POST, PUT, PATCH, and DELETE methods, `got.stream` returns a `stream.Writable`.
  // await pipeline(
  //   fs.createReadStream("index.html"),
  //   got.stream.post("https://sindresorhus.com"),
  //   new stream.PassThrough()
  // );
}





export async function getPypi(url:string) {
  let res = await got("https://pypi.python.org/pypi/rich/json").json();
  console.log(res.info.home_page);
}
export async function useAxios() {
  let res = await axios.get("https://pypi.python.org/pypi/rich/json");
  console.log(res);
}