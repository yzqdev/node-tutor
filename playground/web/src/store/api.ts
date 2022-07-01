import { post, get } from "./fetch.js";

const api = {
  add: "/home/add",
  codeList: "/home/codeList",
  codeDetail: "/home/codeDetail",
  getVerify: "/home/verify",
};

export default {
  actions: {
    codeList: () => {
      return get(api.codeList);
    },
    codeDetail: ({ state }: any, id: string) => {
      return get(api.codeDetail, { id });
    },
    getVerify: () => {
      return get(api.getVerify);
    },
  },
};
