let array = [1, [1, 2, 3], [1, [2, {}]] ]


const handle = array => JSON.parse(`[${JSON.stringify(array).replace(/[\[\]]/g,'')}]`);
handle(array)   // [ 1, 1, 2, 3, 1, 2, {} ]

console.log(JSON.stringify(array))
