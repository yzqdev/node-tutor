Array.prototype.myMap = function(fn, context) {
  const array = this;
  // 严格模式下
  const resultArr = [];

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    result = fn.call(context, item, i, array);
    console.log(result);
    resultArr.push(result);
  }
  return resultArr;
};
Array.prototype.myFilter = function(fn, context) {
  if (typeof fn !== "function") {
    throw new TypeError(`${fn} is not a function`);
  }

  let arr = this;
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    let result = fn.call(context, arr[i], i, arr);
    if (result) {
      temp.push(arr[i]);
    }
  }
  return temp;
};

Array.prototype.myReduce = function(fn, initialValue) {
  var arr = Array.prototype.slice.call(this);
  var res, startIndex;
  res = initialValue ? initialValue : arr[0];
  startIndex = initialValue ? 0 : 1;
  for (var i = startIndex; i < arr.length; i++) {
    res = fn.call(null, res, arr[i], i, this);
  }
  return res;
};

let arr = ["x", "y", "z"];

console.log(
  arr.myMap(function(item, index) {
    return item + `${index}`;
  })
);
