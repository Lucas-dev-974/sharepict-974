// Model import
const { update } = require('../models/user.js');
const User = require('../models/user.js');
const AlbumsShared = require('../models/albums_shared.js');
const Albums = require('../models/albums.js');
const { Op } = require("sequelize");
// Import packages
const utils = require('../services/utils.js')
const bcrypt = require('bcrypt')

User.hasMany(Albums);
Albums.belongsTo(User);

AlbumsShared.belongsTo(User,{foreignKey: 'usersharedId'});
User.hasMany(AlbumsShared,{foreignKey: 'usersharedId'});

Albums.hasMany(AlbumsShared);
AlbumsShared.belongsTo(Albums);

exports.update_pp = async (req, res, next) => {
    // console.log(req);
    // let user = await User.findOne({ where: {id: req.user.id}});
    // console.log(user);
    return res.send("user")
}

exports.update_pseudo = async (req, res, next) => {
    // Check attemted values
    let requiredValidator = utils.requireQueries(["pseudo"], req.body)
    if (requiredValidator !== true) return res.json({ success: false, errors: requiredValidator })

    let updated = await User.update({ pseudo: req.body.pseudo }, {
        where: { id: req.user.id }
    })
    if (!updated) return res.json({ success: false, errors: "Une erreur est survenue" })
    return res.json({ success: true })
}

exports.update_email = async (req, res, next) => {
    // Check attemted values
    let requiredValidator = utils.requireQueries(["email"], req.body)
    if (requiredValidator !== true) return res.json({ success: false, errors: requiredValidator })
    let updated = await User.update({ email: req.body.email }, {
        where: { id: req.body.id }
    })
    if (!updated) return res.json({ success: false, errors: "Une erreur est survenue" })
    return res.json({ successs: true })
}

exports.update_password = async (req, res, next) => {
    // Check attemted values
    let requiredValidator = utils.requireQueries(["new_password"], req.body)
    if (requiredValidator !== true) return res.json({ success: false, errors: requiredValidator })

    let password = bcrypt.hashSync(req.body.password, 10)
    let updated = await User.update({ password: password }, {
        where: { id: req.user.id }
    })

    if (!updated) return res.json({ success: false, errors: "Une erreur est survenue" })
    return res.json({ success: true })
}

exports.delete_pp = async (req, res, next) => {

}

exports.listeAlbums = async (req, res) => {
    let albums = await User.findAll({
        include: [{ model: AlbumsShared, where: { userId: 1 }, include: [{ model: Albums }] }],

    })

 
    res.json(albums);
}

exports.unlink = async (req, res) => {
   
console.log(req.body);
  //  AlbumsShared.destroy({where:{albumId:req.body.album,usersharedId:req.body.user } }).then(album=>{

     res.json({ "msg":"ok" });
    //})
}
exports.getUsers=async (req, res)=>{
console.log(req.body);
  let  users=await User.findAll( {
        where: {
          [Op.or]: [
            { name:{[Op.like] : "%"+ req.body.nom +"%" } },
            { lastname:{[Op.like]:"%"+ req.body.nom +"%" } }
          ]
        }
      } )
      console.log(users);
      
    res.json(users);
}

exports.share = async (req, res) => {
   
    let albums = await User.findAll({
        include: [{ model: AlbumsShared, where: { usersharedId: 1 }, include: [{ model: Albums }] }],

    })


    res.json(albums);
}
    