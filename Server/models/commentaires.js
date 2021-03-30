const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('./init_db.js')

class Commentaires extends Model{}
Commentaires.init({
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },

    user_id: Sequelize.INTEGER, 
    picture_id: Sequelize.INTEGER,
    commentaire: Sequelize.STRING,
    published_at: Sequelize.DATE    
}, {  sequelize, modelName:"users" 
})

module.exports = Commentaires