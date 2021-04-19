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

    userId:{field:"user_id", type:Sequelize.INTEGER, references:"users"}, 
    picture_id: {type:Sequelize.INTEGER, references:"pictures"}, 
    name: Sequelize.STRING,
    published: Sequelize.BOOLEAN
}, {  sequelize, modelName:"albums" , timestamps:false
})

module.exports = Albums