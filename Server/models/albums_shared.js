const db = 'mysql://root:root974@localhost:3306/sharepicts_974'
const Sequelize = require('sequelize')
const sequelize = new Sequelize(db, {
    operatorsAliases:  false
})

const albums_shared = sequelize.define('albums_shared', {
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },

    user_id: Sequelize.INTEGER, 
    album_id: Sequelize.INTEGER,
    user_shared_id: Sequelize.INTEGER,
})

module.exports = albums_shared