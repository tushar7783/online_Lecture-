const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Group=require('./group')

// Define the User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Phone_number:{
    type:DataTypes.STRING(15),
    unique: true,

    allowNull:false
  },
  otp:{
    type:DataTypes.STRING,
    allowNull:true,
    defaultValue: null,
  },
  
  Token:{
    type:DataTypes.STRING,
    allowNull:true,
    defaultValue: null,
  },
 
}, {
  tableName: 'users', // Optional: Specify table name if it differs from 'User'
  timestamps: true,  // Automatically creates `createdAt` and `updatedAt` fields
});

(async () => {
  try {
    await sequelize.sync({ force: false }); // `force: true` will drop existing tables
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();

// Define the relationship
User.belongsTo(Group, { foreignKey: 'group_id' });
Group.hasMany(User, { foreignKey: 'group_id' });
module.exports=User