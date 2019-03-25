const Router = require('koa-router');

const router = new Router();
//接口整合


router.get('/',ctx=> {
    console.log(ctx.request);
    console.log(ctx.response);
    ctx.body = {
        name:"dinglei",
        age:26
    }
});

module.exports = router;