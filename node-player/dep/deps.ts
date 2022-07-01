import yaml from "js-yaml";
import fs from "node:fs";
import got from "got";
let dir = "./pub.yml";
interface Pub {
    name: string;
    dependencies: object;
    version: string;
}
interface PubApi{

}
export function getDeps() {
    let doc = yaml.load(fs.readFileSync(dir, "utf8")) as Pub;

    let pkgName = "dio";
    let flutterDep=['flutter_localizations','flutter']
    let pubApi =`https://pub.flutter-io.cn/api/packages/`;
    Object.entries(doc.dependencies).map(async (item) => {
        if (!flutterDep.includes(item[0] ) ) {
            console.log(`%capi url`,`color:red;font-size:16px;background:transparent`)
            console.log(pubApi + item[0])
            let data = await got.get(pubApi + item[0]).json()
            console.log( data.latest.version)
        }
    })

}
