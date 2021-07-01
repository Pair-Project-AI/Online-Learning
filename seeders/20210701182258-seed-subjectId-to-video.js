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
        SubjectId: 1
      },
      {
        SubjectId: 1
      },
      {
        SubjectId: 1
      },
      {
        SubjectId: 1
      },
      {
        SubjectId: 1
      },
      {
        SubjectId: 2
      },
      {
        SubjectId: 2
      },
      {
        SubjectId: 2
      },
      {
        SubjectId: 3
      },
      {
        SubjectId: 3
      },
      {
        SubjectId: 3
      },
      {
        SubjectId: 3
      },
      {
        SubjectId: 4
      },
      {
        SubjectId: 4
      },
      {
        SubjectId: 4
      },
      {
        SubjectId: 4
      },
      {
        SubjectId: 4
      },
      {
        SubjectId: 5
      },
      {
        SubjectId: 5
      },
      {
        SubjectId: 5
      },
      {
        SubjectId: 6
      },
      {
        SubjectId: 6
      },
      {
        SubjectId: 6
      },
      {
        SubjectId: 6
      },
      {
        SubjectId: 6
      },
      {
        SubjectId: 6
      }
    ]
    return queryInterface.bulkInsert("Videos", data, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Videos", null, {})
  }
};
