const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('./init_db.js')

class AlbumsShared extends Model{}
AlbumsShared.init({
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },

    user_id: Sequelize.INTEGER, 
    album_id: Sequelize.INTEGER,
    user_shared_id: Sequelize.INTEGER,
}, {  sequelize, modelName:"users" 
})

module.exports = AlbumsShared