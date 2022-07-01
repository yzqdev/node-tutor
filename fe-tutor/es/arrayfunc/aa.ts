import { anagrams } from "../utils/30seconds/anagram";

const all = (arr: any[], fn = Boolean) => {
  return arr.every(fn);
};
console.log(anagrams("hhd"));
const convToArray = (num: number) => [...`${num}`].map((el) => parseInt(el));
console.log(`%c${convToArray(123456)}`, `color:red;font-size:16px;background:transparent`);
export { convToArray };
