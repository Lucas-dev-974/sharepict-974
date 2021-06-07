const User = require('../models/user')
const bcrypt = require('bcrypt')

let data = {
    1:{
        email: "user-1@gmail.com",
        name:  "user-1",
        lastname: "user",
        pseudo:   "user-1",
        password: bcrypt.hashSync("user@1", 10)
    },
    2:{
        email: "user-2@gmail.com",
        name:  "user-2",
        lastname: "user",
        pseudo:   "user-2",
        password: bcrypt.hashSync("user@2", 10)
    },
   3:{
        email: "user-3@gmail.com",
        name:  "user-3",
        lastname: "user",
        pseudo:   "user-3",
        password: bcrypt.hashSync("user@3", 10)
    },
    4:{
        email: "user-4@gmail.com",
        name:  "user-4",
        lastname: "user",
        pseudo:   "user-4",
        password: bcrypt.hashSync("user@4", 10)
    }
}

exports.seed = async function seed(){
    for(const dat in data){
        await User.create(data[dat]).catch(err=>console.log(err))
    }
}
