'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const data = [
      {
        name: "Mahir Bersiul",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Seni Melamun",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Seni Bertanya",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mahir Berjalan",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mahir Bernafas",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cara Membuat Lem",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('Subjects', data, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Subjects', null, {})
  }
};
