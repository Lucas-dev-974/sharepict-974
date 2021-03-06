const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('./init_db.js')
const { tableName } = require('./user.js')

class AlbumsShared extends Model{}
AlbumsShared.init({
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,    
        primaryKey:true,
        autoIncrement:true,
    },

    userId: {field:"user_id", type:Sequelize.INTEGER, references:{ model:"users",key:"id" }}, 
    albumId: {field:"album_id" ,type:Sequelize.INTEGER, references:{ model:"albums",key:"id" }}, 
    usersharedId: {field:"user_shared_id", type:Sequelize.INTEGER, references:{ model:"users",key:"id" }}, 
    //user_shared_id: Sequelize.INTEGER,
}, {  sequelize, modelName:"albums_shared", tableName:"albums_shared"
})

module.exports = AlbumsShared