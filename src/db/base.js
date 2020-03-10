const initApp = require('../../init');

module.exports = class BaseModel {
    constructor() {
        // console.log('BaseModel',initApp.context.connection)
        this.ctx = initApp.context;
    }
}