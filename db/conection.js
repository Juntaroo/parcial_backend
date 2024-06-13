import {Sequelize} from 'sequelize';


const sequelize = new Sequelize('parcial', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});


export default sequelize