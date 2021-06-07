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

   // user_id: Sequelize.INTEGER, 
    //picture_id: Sequelize.INTEGER,
    userId:{field:"user_id", type:Sequelize.INTEGER, references:{ model:"users",key:"id" }},
    pictureId:{field:"picture_id", type:Sequelize.INTEGER, references:{ model:"pictures",key:"id" }},
    commentaire: Sequelize.STRING,
    published_at: Sequelize.DATE    
}, {  sequelize, modelName:"commentaires" ,tableName:"commentaires"
})

module.exports = Commentaires