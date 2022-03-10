import fse from 'fs-extra'
import  * as xlsx from "xlsx/xlsx.mjs";
let backup=fse.readJsonSync('200.json')
let i=0
let arr=[]
let str=""
for (let item  of backup){

    arr.push({
        time:item.time,
        name:item.name
    })
    str+=`[${item.time}](${item.name})\n`
}
const workBook= xlsx.utils.book_new();
const workSheet = xlsx.utils.aoa_to_sheet([[1,2,3],[4,5,6]],{
    cellDates:true,
});

// 向工作簿中追加工作表
xlsx.utils.book_append_sheet(workBook, workSheet,'常驻祈愿');

// 浏览器端和node共有的API,实际上node可以直接使用xlsx.writeFile来写入文件,但是浏览器没有该API
const result = xlsx.write(workBook, {
    bookType: 'xlsx', // 输出的文件类型
    type: 'buffer', // 输出的数据类型
    compression:true // 开启zip压缩
});

fse.outputFile('./200.xlsx',result,(err,data) => {
  console.log('success')
})
