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

    albumId:{field:"album_id", type:Sequelize.INTEGER,references:{ model:"albums",key:"id" }}, 
    pictureId: {field:"picture_id", type:Sequelize.INTEGER, references:{ model:"pictures",key:"id" }}, 
}, {  sequelize, modelName:"album_pictures" ,tableName:"album_pictures"
})

module.exports = Album_pictures