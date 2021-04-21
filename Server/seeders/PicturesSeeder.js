const Picture = require('../models/pictures');
let data = {
    1: {
        user_id: "1",
        name: "pict 1",
        path: "/uploads/Seeders Images/default.png",
        status: "private"
    },   
}

exports.seed = async function seed(){
    for(const dat in data){
        await Picture.create(data[dat])
    }
}
