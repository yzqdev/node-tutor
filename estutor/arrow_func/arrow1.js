function create() {
  const obj = new Object();
  const constructort = [].shift().call(arguments);
  obj.__proto__ = constructort.prototype;
  const result = constructort.apply(obj, arguments);
  return typeof result === `object` ? result : obj;
}
function instanceof1(left, right) {
  // 获得类型的原型
  const { prototype } = right;
  // 获得对象的原型
  left = left.__proto__;
  // 判断对象的类型是否等于类型的原型
  while (true) {
    if (left === null) {
      return false;
    }
    if (prototype === left) {
      return true;
    }
    left = left.__proto__;
  }
}

console.log(instanceof1('1',String))
