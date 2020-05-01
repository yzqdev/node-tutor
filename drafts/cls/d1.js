function groupList(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return [];
  }

  var validItems = getValidItems(list);
  var result = {};

  validItems.forEach((item) => {
    if (result.hasOwnProperty(item.type)) {
      result[item.type].push(item.content);
    } else {
      result[item.type] = [];
      result[item.type].push(item.content);
    }
  });
  console.log(result);
}
function getValidItems(json) {
  return json.filter(function (element) {
    let flag =
      Object.prototype.toString.call(element).slice(8, -1) === "Object";
    return flag && element.type && element.content;
  });
}

// test
var input = [
  null,
  2,
  "test",
  undefined,
  {
    type: "product",
    content: "product1",
  },
  {
    type: "product",
    content: "product2",
  },
  {
    type: "tag",
    content: "tag1",
  },
  {
    type: "product",
    content: "product3",
  },
  {
    type: "tag",
    content: "tag2",
  },
];

console.log(JSON.stringify(groupList(input)));
// [{"type":"product","contents":["product1","product2","product3"]},{"type":"tag","contents":["tag1","tag2"]}]
