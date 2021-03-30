const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('./init_db.js')

class Albums extends Model{}
Albums.init({
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },

    user_id: Sequelize.INTEGER, 
    picture_id: Sequelize.INTEGER,
    name: Sequelize.STRING,
    published: Sequelize.BOOLEAN
}, {  sequelize, modelName:"users" 
})

module.exports = Albums