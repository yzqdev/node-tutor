import fse from 'fs-extra'

let backup = fse.readJsonSync('WishLog_167117381.json')
let i = 0
let arr = []
let str = `|序号| gachatype    | time |name|id|
| ----------- |----------- | ----------- |----------- |----------- |\n`
for (let item of backup) {

    if (item.gacha_type == '200') {
        i++
        str += `|${i}|${item.gacha_type}|(${item.time})|${item.name}|${item.id}|\n`
    }

}
console.log()


fse.outputFile('niuza.md', str, (err, data) => {
    console.log('success')
})
