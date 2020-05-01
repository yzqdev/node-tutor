var throttle = function (func, delay) {
  var timer = null;
  return function () {
    var context = this;
    var args = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        func.apply(context, args);
        timer = null;
      }, delay);
    }
  };
};
function handle() {
  console.log(Math.random());
}
throttle(handle, 1000);
