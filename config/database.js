// import sequelize
import { Sequelize } from "sequelize";
import 'dotenv/config'
 
// create connection
const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});
 
// export connection
export default db;