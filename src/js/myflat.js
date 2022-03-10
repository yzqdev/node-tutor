/*
 * @Author: your name
 * @Date: 2020-03-26 15:15:10
 * @LastEditTime: 2020-04-06 16:06:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \jstutor\js\myflat.js
 */
let ary = [1, [2, [3, [4, 5]]], 6];
let str = JSON.stringify(ary);
//第一种处理
ary = str.replace(/([\[\]])/g, "");
str = "[" + str + "]";
ary = JSON.parse(str);
console.log(ary);
//第三种处理：递归处理
let result = [];
let fn = function (ary) {
  for (let i = 0; i < ary.length; i++) {
    let item = ary[i];
    if (Array.isArray(ary[i])) {
      fn(item);
    } else {
      result.push(item);
    }
  }
};
//第四种处理：用 reduce 实现数组的 flat 方法
function flatten(ary) {
  return ary.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
}
let ary = [1, 2, [3, 4], [5, [6, 7]]];
console.log(flatten(ary));
//第五种处理：扩展运算符
while (ary.some(Array.isArray)) {
  ary = [].concat(...ary);
}
