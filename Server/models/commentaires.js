const db = 'mysql://root:root974@localhost:3306/sharepicts_974'
const Sequelize = require('sequelize')
const sequelize = new Sequelize(db, {
    operatorsAliases:  false
})

const commentaires = sequelize.define('commentaires', {
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
})

module.exports = commentaires