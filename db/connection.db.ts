import { Sequelize } from "sequelize";

const db = new Sequelize('node','root','Cl14m51962', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false
});

export default db;