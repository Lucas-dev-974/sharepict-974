const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('./init_db.js')

class Notification extends Model{}
Notification.init({
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },

    //user_id: Sequelize.INTEGER, 
    userId:{field:"user_id", type:Sequelize.INTEGER, references:{ model:"users",key:"id" }},
    notif: Sequelize.STRING,
    opened: Sequelize.STRING,    
}, {  sequelize, modelName:"notifications" 
})
module.exports = Notification