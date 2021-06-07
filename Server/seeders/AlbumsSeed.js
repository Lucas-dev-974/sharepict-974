const Album = require('../models/albums');
let data = {
    1: {
        userId: "1",
        name: "album 1"
    },   
    2: {
        userId: "1",
        name: "album 2"
    }, 
    3: {
        userId: "1",
        name: "album 3"
    }, 
}

exports.seed = async function seed(){
    for(const dat in data){
        await Album.create(data[dat])
    }
}
