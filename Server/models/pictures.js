const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('./init_db.js')

class Pictures extends Model{}
Pictures.init({
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },

    user_id: Sequelize.INTEGER, 
    name: Sequelize.STRING,
    path: Sequelize.STRING,
    status: Sequelize.STRING
}, {  sequelize, modelName:"pictures" 
})
module.exports = Pictures