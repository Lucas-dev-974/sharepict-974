'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('albums_shared', {     id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true,
  },

  user_id: Sequelize.INTEGER, 
  album_id: Sequelize.INTEGER,
  user_shared_id: Sequelize.INTEGER,});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('albums_shared');
  }
};
