// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const User = db.define('users', {
  // Define attributes
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING(50)
  },
  last_name: {
    type: DataTypes.STRING(50)
  },
  birthday: {
    type: DataTypes.DATE
  },
  password: {
    type: DataTypes.STRING(50)
  },
  gender_id: {
    type: DataTypes.INTEGER
  }
},{
  // Freeze Table Name
  freezeTableName: true,
  timestamps: false
});
 
// Export model User
export default User;