'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('albums', {     
       id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true,
  },

  user_id: Sequelize.INTEGER, 
  picture_id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  published: Sequelize.BOOLEAN });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('albums');
  }
};
