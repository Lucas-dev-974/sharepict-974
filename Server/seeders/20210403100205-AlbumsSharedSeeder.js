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
     await queryInterface.bulkInsert('albums_shared', [ 
       {
      id:1,
      user_id: 1, 
      album_id: 1,
      user_shared_id: 2
  },
  {
    id:2,
    user_id: 1, 
    album_id: 2,
  user_shared_id: 2
},
{
  id:3,
  user_id: 1, 
  album_id: 2,
user_shared_id: 3
},
{
  id:4,
  user_id: 1, 
  album_id: 3,
user_shared_id: 3
},
{
  id:5,
  user_id: 2, 
  album_id: 3,
user_shared_id: 2
},
{
  id:6,
  user_id: 1, 
  album_id: 4,
user_shared_id: 4
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
     await queryInterface.bulkDelete('albums_shared', null, {});
  }
};
