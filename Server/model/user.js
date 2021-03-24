const db = 'mysql://root:root974@localhost:3306/sharepicts_974'
const Sequelize = require('sequelize')
const sequelize = new Sequelize(db, {
    operatorsAliases:  false
})

const user = sequelize.define('user', {
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },

    name:{
        type: Sequelize.STRING
    }, lastname:{
        type: Sequelize.STRING
    }, pseudo:{
        type: Sequelize.STRING
    },

    email:{
        type:Sequelize.STRING
    }, email_verified:{
        type: Sequelize.BOOLEAN
    }, password: {
        type: Sequelize.STRING
    }
})

module.exports = user