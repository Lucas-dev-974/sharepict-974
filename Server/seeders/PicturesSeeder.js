const Picture = require('../models/pictures');

let data = {
    1: {
        user_id: "1",
        name: "pict 1",
        path: "/uploads/Seeders Images/default.png",
        status: "private"
    },
    2: {
        user_id: "1",
        name: "pict 2",
        path: "/uploads/Seeders Images/default.png",
        status: "public"
    },
    3: {
        user_id: "1",
        name: "pict 3",
        path: "/uploads/Seeders Images/default.png",
        status: "public"
    },
    4: {
        user_id: "1",
        name: "pict 4",
        path: "/uploads/Seeders Images/default.png",
        status: "public"
    }   
}

exports.seed = async function seed(){
    for(const dat in data){
        await Picture.create(data[dat])
    }
}
