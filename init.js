const Koa = require('koa');
const app = new Koa();
const mysql  = require('mysql');
app.context.connection = mysql.createConnection({
    host:'localhost',
    port:"3306",
    user:'root',
    password:'yimao520!',
    database: 'study'
});
console.log('init');


module.exports = app;

