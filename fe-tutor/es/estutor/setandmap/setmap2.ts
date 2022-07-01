const s = new Set();
[1, 2, 34, 5].forEach((x) => {
  s.add(x);
});
for (let i of s) {
  let m = 343;
  console.log(m);
  console.log(i);
}
console.log([...new Set(`aaadddbdde`)].join(``)); //去除重复字符
const prop = new Set();
prop.add(`hello`);
prop.add(`lisck`);
if (prop.has(`hello`)) {
  console.log(`Hello`);
}
let y = new Set([`red`, `green`, `blue`]);

for (let string of y) {
  console.log(string);
}
const foos = new WeakSet();
class Foo {
  constructor() {
    foos.add(this);
  }
  method() {
    if (!foos.has(this)) {
      console.log(`helo`);
    }
  }
}
export {};
