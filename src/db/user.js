const BaseModel = require('./base');

module.exports = class UserModel extends BaseModel{
    constructor() {
        super();
    }

    getUserList() {
        return new Promise((resolve,reject)=>{
            // console.log('getUserList',this.ctx.connection.query)
            this.ctx.connection.query('SELECT * FROM USER', function (error, results, fields) {
                if (error) reject(error);
                // console.log('The solution is: ', results);
                resolve(results);
            });
        })
        
    }

    getUserById(id) {} 
    
}
