'use strict';
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import your Sequelize instance

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  available: {
    type: DataTypes.BOOLEAN,
    defaultValue: true, // Default value for available
  },
}, {
  timestamps: false, // Disable timestamps
});

module.exports = Book;