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
     await queryInterface.bulkInsert('users', [
       {
       id:1,
        name: 'John',
        lastname: 'paul',
        pseudo:"joe",
        email:"jpauk@mail.fr",
        email_verified:1,
        password:"toto"
       },
       {
        id:2,
        name: 'John',
         lastname: 'paul',
         pseudo:"paul",
         email:"jpaul@mail.fr",
         email_verified:1,
         password:"toto"
        },
        {
          id:3,
          name: 'daniel',
           lastname: 'tom',
           pseudo:"paul",
           email:"dtom@mail.fr",
           email_verified:1,
           password:"toto"
          },
          {
            id:4,
            name: 'marie',
             lastname: 'doe',
             pseudo:"paul",
             email:"mdoe@mail.fr",
             email_verified:1,
             password:"toto"
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
     await queryInterface.bulkDelete('users', null, {});
  }
};
