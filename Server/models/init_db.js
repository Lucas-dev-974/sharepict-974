require('dotenv').config()
const host = (process.env.HOST) ? process.env.HOST :  'mysql://root:@localhost:3306/share_pict_974'
const Sequelize = require('sequelize')

module.exports= new Sequelize(host, { operatorsAliases: false })
