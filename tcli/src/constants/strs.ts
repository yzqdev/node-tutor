import { IConfig } from "../interfaces";

export const questions = [
  { name: "node", type: "confirm", message: "设置node镜像?" },
  { name: "nvm", type: "confirm", message: "设置nvm镜像?" },
  { name: "flutter", type: "confirm", message: "设置flutter镜像?" },
  { name: "electron", type: "confirm", message: "设置electron镜像?" },
];
export const defaultConfig: IConfig = {
  electron: false,
  flutter: false,
  node: false,
  nvm: false,
  python: false,
};

export const yarnCmd = [
  ["yarn config list", "查看配置信息"],
  ["yarn global add npm-check-updates", "全局安装包"],
];
