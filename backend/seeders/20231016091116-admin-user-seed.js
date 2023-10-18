'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('admin', 10); // Hash the password

    await queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        password: hashedPassword, // Insert the hashed password
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', { username: 'admin' });
  }
};
