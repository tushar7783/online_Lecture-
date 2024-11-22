const{DataTypes}=require('sequelize');
const sequelize=require('../config/database')

const Group=sequelize.define('Group',{
    group_id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    group_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
},{
    tableName: 'group',
    timestamps:false
})



module.exports=Group;