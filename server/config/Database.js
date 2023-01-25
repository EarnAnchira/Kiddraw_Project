import { Sequelize } from "sequelize";

const db=new Sequelize('kiddraw','root','root',{
    host: 'localhost',
    dialect: 'mysql',
    port: '3000'
});

export default db;