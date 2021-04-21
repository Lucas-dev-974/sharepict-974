const Album = require('../models/albums');
let data = {
    1: {
        user_id: "1",
        name: "album 1"
    },   
}

exports.seed = async function seed(){
    for(const dat in data){
        await Album.create(data[dat])
    }
}
