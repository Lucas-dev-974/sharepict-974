const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('./init_db.js')

class User extends Model{}

User.init({
    id:{
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
        allowNull: true,
        type: Sequelize.BOOLEAN
    }, 
    
    password: {
        type: Sequelize.STRING
    }    
}, {  sequelize, modelName:"users" 
})


module.exports = User