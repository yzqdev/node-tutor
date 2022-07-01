import { Command } from "commander";
import axios from "axios";
import fs from "fs";
import  path from 'path'
// async function downloadImage(url , dest ) {
//     // axios image download with response type "stream"
//     const response = await axios({
//         method: "GET",
//         url: url,
//         responseType: "stream",
//     });
//
// if (!fs.existsSync('res')) {
// fs.mkdirSync('res')
// }
//     response.data.pipe(fs.createWriteStream(dest));
// }
// downloadImage('https://yzqdev.gitee.io/cs-guide/ayaka.jpg','res/a.png')

import regedit from 'regedit'

// regedit.createKey('HKCU\\MySoftware\\soft1', function(err) {
//  console.log(err)
// })
// var valuesToPut = {
//  'HKCU\\Sofware\\MySoftware': {
//   'myValue1': {
//    value: [1,2,3],
//    type: 'REG_BINARY'
//   },
//   'myValue2': {
//    value: 'aString',
//    type: 'REG_SZ'
//   }
//  },
//
// }
//
// regedit.putValue(valuesToPut, function(err) {
// console.log(err)
// })
//

fs.unlinkSync('file/1.txt')
