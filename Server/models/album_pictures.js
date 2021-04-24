const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('./init_db.js')

class Album_pictures extends Model{}
Album_pictures.init({
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },

    album_id: Sequelize.INTEGER, 
    picture_id: Sequelize.INTEGER,
}, {  sequelize, modelName:"album_pictures" 
})

module.exports = Album_pictures