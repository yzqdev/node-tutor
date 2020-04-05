var flattened = arr =>
  arr.reduce((acc, cur) => acc.concat(Array.isArray(cur)?flattened(cur):cur), []);

console.log(flattened([45,44,[334,[555]]]));
