# 一个命令行工具

> 注意事项

- `tsconfig.json`设置`  "module": "CommonJS",`
- `package.json`一般不建议设置`"type":"module"`不然编译出来的js文件需要加上后缀名`import help from './help.js'`,然而ts编译出来的并没有后缀


- meow：一个简单的命令行助手工具
- yargs：一个命令行参数解析工具
- pkg：将你的 Node.js 程序包装在一个可执行文件中。
- node-portfinder 自动寻找没被占用的端口
- [json-server](https://github.com/typicode/json-server)支持restfulapi增删改查
> 注意chalk版本必须是4
[https://github.com/raineorshine/npm-check-updates/blob/main/package.json](https://github.com/raineorshine/npm-check-updates/blob/main/package.json)
使用esmpackage [https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
```shell
#查看依赖树
npm ls --depth=1
#查看glob这个包被谁引用了
npm explain glob

```
原因[https://github.com/chalk/chalk/releases/tag/v5.0.0](https://github.com/chalk/chalk/releases/tag/v5.0.0)
### 替代旧的语法
> 旧的
```js
var re = /([0-9])([0-9])([0-9])/;
re.test("345");
var three = RegExp.$1;
var four = RegExp.$2;
var five = RegExp.$3;
```
> 新的
```js
var re = /([0-9])([0-9])([0-9])/;
var [, three, four, five] = "345".match(re);
```
