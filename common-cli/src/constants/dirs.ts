import * as os from "os";
import * as path from "path";

export const configFile = "toolConf.json";
export const confPath = `${os.homedir() + path.sep + configFile}`;
export const npmrcPath = `${os.homedir() + path.sep}.npmrc`;
export const pipPath = `${os.homedir() + path.sep}pip${path.sep}pip.ini`;
