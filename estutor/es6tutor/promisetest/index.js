// 数字 字符串 function是不需要拷贝的
function deepClone(value) {
  if (value == null) {
    return value;
  }
  if (typeof value !== `object`) {
    return value;
  }
  if (value instanceof RegExp) {
    return new RegExp(value);
  }
  if (value instanceof Date) {
    return new Date(value);
  }
  // 我要判断 value 是对象还是数组 如果是对象 就产生对象 是数组就产生数组
  const obj = new value.constructor();
  console.log(obj,'obj')
  for (const key of value) {
    obj[key] = deepClone(value[key]); // 看一看当前的值是不是一个对象
  }
  return obj;
}
const a = {
  age: 23,
  sex: `nan`
};
c = a;
const b = deepClone(a);
b.sex = `err`;
c.sex = `dddd`;
console.log(c);
console.log(a);
