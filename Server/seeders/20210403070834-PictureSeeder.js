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
     await queryInterface.bulkInsert('pictures', [
      {
        id:1,
    
      user_id: 1, 
      name: "pic1",
      path: "/img",
      status: "album"
      },
      {
        id:2,
      user_id: 1, 
      name: "pic2",
      path: "/img",
      status: "album"
      },
      {
        id:3,
      user_id: 1, 
      name: "pic3",
      path: "/img",
      status: "album"
      },
      {
        id:4,
      user_id: 2, 
      name: "pic4",
      path: "/img",
      status: "album"
      },
      {
        id:5,
      user_id: 1, 
      name: "pic4",
      path: "/img",
      status: "album"
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
  }
};
