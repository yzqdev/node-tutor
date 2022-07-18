import { Injectable } from '@nestjs/common';
import { HomeDto } from './home.dto';
import * as fs from 'fs';
import * as crypto from 'crypto';
import * as path from 'path';
import verifyCode from './verifyCode';

let secret = 'menuPath';
console.log(__dirname);
console.log(path.resolve());
// ase-128-cbc 加密算法要求key和iv长度都为16
const key = Buffer.from('9vApxLk5G3PAsJrM', 'utf8');
const iv = Buffer.from('FnJL7EDzjqWjcaY9', 'utf8');

function createDir(path) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
  return true;
}

// 加密
function encode(src, key, iv) {
  let sign = '';
  const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
  sign += cipher.update(src, 'utf8', 'hex');
  sign += cipher.final('hex');
  return sign;
}

// 解密
function decode(sign, key, iv) {
  let src = '';
  const cipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  src += cipher.update(sign, 'hex', 'utf8');
  src += cipher.final('utf8');
  return src;
}

let on = path.join(__dirname, './file');

@Injectable()
export class HomeService {
  private readonly onlinePath: string;
  private readonly tempPath: string;

  constructor() {
    this.onlinePath = path.join(path.resolve(), './file/dat/online');
    this.tempPath = path.join(path.resolve(), './file/dat/temp');
  }

  async add(homeDto: HomeDto) {
    let { token, title, content, answer, option } = homeDto;
    if (answer !== encode(option, key, iv)) {
      return { success: false, msg: '验证码错误' };
    }
    let dirPath = null;
    if (token && token === '123456') {
      // token正确
      if (createDir(this.onlinePath)) {
        dirPath = this.onlinePath;
      } else {
        return { success: false, msg: '添加失败' };
      }
    } else {
      if (createDir(this.tempPath)) {
        dirPath = this.tempPath;
      } else {
        return { success: false, msg: '添加失败' };
      }
    }
    let newFilePath = path.join(dirPath, title);
    fs.writeFile(newFilePath, content, function (err) {
      if (err) {
        return { success: false, msg: '添加失败' };
      }
    });
    return { success: true };
  }

  verify(): object {
    let data: any = verifyCode.getCode();
    data.answer = encode(data.answer, key, iv);
    return {
      success: true,
      data: data,
    };
  }

  codeList(): object {
    let list: any = [];
    fs.readdirSync(this.onlinePath).forEach((fileName) => {
      if (fs.statSync(path.join(this.onlinePath, fileName)).isFile()) {
        list.push({
          title: fileName,
          id: encode(path.join(this.onlinePath, fileName), key, iv),
        });
      }
    });
    return {
      success: true,
      list: list,
    };
  }

  codeDetail(id: string): object {
    let filePath = decode(id, key, iv);

    console.log(filePath);
    let data = fs.readFileSync(filePath, { encoding: 'utf-8' });
    let dirs = filePath.split(path.sep);

    return {
      success: true,
      title: dirs[dirs.length - 1],
      content: data,
    };
  }

  removeData(id: string) {
    let filePath = decode(id, key, iv);
    fs.unlinkSync(filePath);
    return {
      success: true,
    };
  }
}
