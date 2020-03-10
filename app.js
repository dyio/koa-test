const initApp = require('./init');
const router = require('./src/routers/index');


initApp.use(router.routes());
initApp.listen(3000);





