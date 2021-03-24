const db = 'mysql://root:root974@localhost:3306/sharepicts_974'
const Sequelize = require('sequelize')
const sequelize = new Sequelize(db, {
    operatorsAliases: false
})

let user     = require('./user.js')
let pictures = require('./pictures.js')
let albums   = require('./albums.js')
let albums_shared = require('./albums_shared.js')
let notifications = require('./notifications.js')
let commentaires  = require('./commentaires.js')

let tables = [user, pictures, albums, albums_shared, notifications, commentaires]

tables.forEach(element => {
    element.sequelize.sync({force: true}).then(() => {
        console.log('created');
    }).finally(() => {
        sequelize.close();
    })    
});