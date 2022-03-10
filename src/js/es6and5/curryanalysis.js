function curry(fn) {
  var outerArgs = Array.prototype.slice.call(arguments, 1);
  return function() {
    var innerArgs = Array.from(arguments),
      finalArgs = outerArgs.concat(innerArgs);
    return fn.apply(null, finalArgs);
  };
}

function addNum(a, b, c) {
  console.log(`a=${a},b=${b},c=${c}`);
}
let curryF = curry(addNum());
console.log(curry(addNum(344)(3)));
