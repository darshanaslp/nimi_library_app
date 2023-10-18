const { Sequelize } = require('sequelize');

// Replace these with your actual database credentials
const dbHost = 'host';
const dbPort = 'port';
const dbName = 'database';
const dbUser = 'user';
const dbPassword = 'password';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: 'mysql', // You can change this to match your database type (e.g., 'postgres', 'sqlite', etc.)
  define: {
    timestamps: true, // Define whether you want timestamps for your models
    underscored: true, // Use underscores instead of camelCase for column names
  },
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;