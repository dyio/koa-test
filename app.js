const Koa = require('koa');
const router = require('./src/routers/index');
const app = new Koa();


app.use(router.routes());


app.listen(3000);
