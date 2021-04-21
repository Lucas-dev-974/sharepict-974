const User = require('../models/user')
const bcrypt = require('bcrypt')

let data = {
    1:{
        email: "user-1@gmail.com",
        name:  "user-1",
        lastname: "user",
        pseudo:   "user-1",
        password: bcrypt.hashSync("user@1", 10),
    }
}

exports.seed = async function seed(){
    for(const dat in data){
        await User.create(data[dat])
    }
}
