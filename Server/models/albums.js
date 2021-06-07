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

    userId:{field:"user_id", type:Sequelize.INTEGER,references:{ model:"users",key:"id" }}, 
    //user_id:Sequelize.INTEGER,
    name: Sequelize.STRING,
    published: Sequelize.BOOLEAN
}, {  sequelize, modelName:"albums" ,tableName:"albums"
})

module.exports = Albums