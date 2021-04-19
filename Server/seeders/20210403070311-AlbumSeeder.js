'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('albums', [
       {
         id:1,
         user_id:1,
         picture_id:1,
         name:"test",
         published: false
       },
       {
        id:2,
        user_id:1,
        picture_id:2,
        name:"test",
        published: false
      },
      {
        id:3,
        user_id:2,
        picture_id:3,
        name:"test",
        published: false
      },
      {
        id:4,
        user_id:1,
        picture_id:4,
        name:"test4",
        published: false
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('albums', null, {});
  }
};
