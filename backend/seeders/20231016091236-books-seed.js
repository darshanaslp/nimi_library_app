'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Sample Book 1',
        author: 'Author 1',
        available: true,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        title: 'Sample Book 2',
        author: 'Author 2',
        available: true,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
      {
        title: 'Sample Book 3',
        author: 'Author 3',
        available: false,
        // createdAt: new Date(),
        // updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
