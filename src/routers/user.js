const UserModel = require('../db/user');
const userDataGet = new UserModel();

module.exports = function (router) {
    router.get('/user/info',async ctx=> {
        const userlist = await userDataGet.getUserList();
        ctx.body = {
            data:{
                userlist
            }
        }
    });
}