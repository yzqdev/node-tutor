var _ = require('lodash')
_.divide(dividend, divisor)
console.log(licia([2, 3, 54, 6, 7, 2, 3, , 6, 7, 3, 8, 8, 3, 34, 7, 8, 4, 456]));
console.log(licia.bubble)
const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) => {
    return value && value.type === 'Buffer' ?
        Buffer.from(value.data) :
        value;
});

// 输出: <Buffer 01 02 03 04 05>
console.log(copy);
