

require("dotenv/config")
const { Sequelize } = require('sequelize');
// const { Sequelize } = require("../models")

const db=new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
      host: process.env.DB_HOST,
      dialect: "mysql",
    }
)

async (req,res) => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
module.exports = db;
   
