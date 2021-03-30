const db = 'mysql://root:root974@localhost:3306/sharepicts_974'
const Sequelize = require('sequelize')
const sequelize = new Sequelize(db, {
    operatorsAliases:  false
})

const pictures = sequelize.define('pictures', {
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
})

module.exports = pictures