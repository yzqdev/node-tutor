var globalVar = "global";
var outerVar = "outer";
function outerFunc(outerParam) {
  function innerFunc(innerParam) {
    console.log(globalVar, outerParam, innerParam);
  }
  return innerFunc;
}
const x = outerFunc(outerVar);
outerVar = "outer-2";
globalVar = "guess";
x("inner");
