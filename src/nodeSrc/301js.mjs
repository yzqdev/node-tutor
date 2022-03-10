import fse from 'fs-extra'
import {addPreZero, weapon, oneToTen, charactor} from './util.mjs'

let arr = []

let time = '2021-03-20 18:08:51'
for (let i = 1; i < 70; i++) {

    let itemId = `16010000${addPreZero(i)}66666666`
    if (i % 10 === 1) {
        arr.push(charactor(time, itemId))
        continue
    }
    if (i%80===1) {
      arr.push()
    }
    switch (oneToTen()) {
        case 1:
        case 2:
            arr.push(weapon('弹弓', time, itemId));
            break
        case 3:
        case 4:
            arr.push(weapon('以理服人', time, itemId))
            break
        case 5:
        case 6:
            arr.push(weapon('黑缨枪', time, itemId))
            break
        case 7:
        case 8:
            arr.push(weapon('冷刃', time, itemId))
            break
        case 9:

        case 10:
        default:
            arr.push(weapon('以理服人', time, itemId))
            break
    }
}

fse.writeJson('301.json', arr, err => {
    if (err) return console.error(err)
    console.log('success!')
})
