'use strict';
const { DataTypes } = require('sequelize'); // Import DataTypes from Sequelize
const sequelize = require('../config/database'); // Import your Sequelize instance

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [6, 255], // Define an appropriate password length range
    },
  },
},{
  timestamps: false, // Disable timestamps
});

User.beforeCreate(async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
});

module.exports = User;