const Router = require('koa-router');

const initUser = require('./user');

const router = new Router();
//接口整合


router.get('/',ctx=> {
    ctx.body = {
        name:"dinglei",
        age:26
    }
});

initUser(router);



module.exports = router;