const album_shared = require('../models/albums_shared');
let data = {
    1: {
        userId: 1, 
        albumId: 2,
        usersharedId: 2,
    },
    2: {
        userId: 1, 
        albumId: 2,
        usersharedId: 3,
    },
    3: {
        userId: 1, 
        albumId: 3,
        usersharedId: 2,
    },
    4: {
        userId: 1, 
        albumId: 3,
        usersharedId: 4,
    },
}

exports.seed = async function seed(){
    for(const dat in data){
        await album_shared.create(data[dat]).catch(err=>console.log(err))
    }
}
