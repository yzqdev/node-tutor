function handleStr(str) {
  var arr = str.split("");
  var nums = "";
  var words = "";

  arr.forEach(function(element) {
    if (/\d/.test(element)) {
      nums += element;
    } else if (/[a-zA-Z]/.test(element)) {
      words += element;
    }
  });

  return uniqueStr(nums) + words;
}
function uniqueStr(str) {
  var arr = str.split("");

  return arr
    .filter(function(element, index) {
      return arr.indexOf(element) === index;
    })
    .join("");
}
let str='携程C2t0r1i8p2020校招'
console.log(handleStr(str))
