let arr = [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }, {}, { id: null }, { id: NaN }, { id: `undefined` }];

// 判断当前元素是否为数字
function isNumber(obj) {
  return obj !== undefined && typeof obj === `number` && !isNaN(obj);
}
//callback过滤函数
function filterByID(item) {
  if (isNumber(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

let arrByID = arr.filter(filterByID);
// Filtered Array:
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
