'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('users', {    id:{
      type:Sequelize.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true,
  },

  name:{
      type: Sequelize.STRING,

  },

  lastname:{
      type: Sequelize.STRING
  }, 
  
  pseudo:{
      allowNull: false,
      type: Sequelize.STRING
  },

  email:{
      allowNull: false,
      type:Sequelize.STRING,
      unique: true
  }, 
  
  email_verified:{
      type: Sequelize.BOOLEAN
  }, 
  
  password: {
      allowNull: false,
      type: Sequelize.STRING
  }   });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('users');
  }
};
