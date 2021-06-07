require('dotenv').config()
const host = (process.env.HOST) ? process.env.HOST :  'mysql://root:root@localhost:3306/share_pict_974'
const Sequelize = require('sequelize')

module.exports= new Sequelize(host, { logging: console.log,operatorsAliases: false })
