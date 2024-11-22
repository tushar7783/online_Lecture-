// 
const sequelize = require('./config/database');
const User = require('./models/User');

(async () => {
  try {
    await sequelize.sync({ force: false }); // `force: true` will drop existing tables
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();