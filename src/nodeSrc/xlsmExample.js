const
    xlsx = require('xlsx'),
    { utils } = xlsx;

const {writeFile} =require('fs').promises;

const workBook= utils.book_new();
const workSheet = utils.aoa_to_sheet([[1,2,3]],{
    cellDates:true,
});

// 向工作簿中追加工作表
utils.book_append_sheet(workBook, workSheet,'helloWorld');

// 浏览器端和node共有的API,实际上node可以直接使用xlsx.writeFile来写入文件,但是浏览器没有该API
const result = xlsx.write(workBook, {
    bookType: 'xlsx', // 输出的文件类型
    type: 'buffer', // 输出的数据类型
    compression:true // 开启zip压缩
});

// 写入文件
writeFile('./hello.xlsx',result)
    .catch((error)=>{
        console.log(error);
    });
