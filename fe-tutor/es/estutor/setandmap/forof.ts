for (const [i, v] of [`a`, `b`, `c`].entries()) {
  console.log(i, v);
}
// 例子 6-2
arr = [
  [234, 5],
  [6, 78],
  [4, 5],
];
let map = new Map(arr);

// 遍历 key 值
for (let key of map.keys()) {
  console.log(key);
}

// 遍历 value 值
for (let value of map.values()) {
  console.log(value);
}

// 遍历 key 和 value 值(一)
for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
let data = new Map(arr);
// 遍历 key 和 value 值(二)
for (let [key, value] of data) {
  console.log(key);
}
