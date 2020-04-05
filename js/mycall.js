Function.prototype.mycall = function(context = window, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  context.fn = this; // 给context创建一个临时的fn属性，将值设置为需要调用的函数
  // const args = [...arguments].slice(1) // call接受的是一个参数列表，第一个参数是函数执行时的this指向，去掉第一个参数，后面的就是我们需要传递给函数调用的参数
  const result = context.fn(...args);
  delete context.fn; // 删除临时属性
  return result;
};
function adddd(a, b) {
  let c = a + b;
  console.log(c);
}
let c = {};
adddd.mycall(c, 45, 555);
