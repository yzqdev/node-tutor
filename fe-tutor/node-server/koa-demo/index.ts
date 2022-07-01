import Koa from "koa";
const app = new Koa();

app.use(async (ctx: { body: string }) => {
  ctx.body = "Hello World";
});

app.listen(3000);
console.log(`%c启动成功, http://localhost:3000`, `color:red;font-size:16px;background:transparent`);
