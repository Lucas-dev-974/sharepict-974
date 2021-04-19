
// Import packages
const multer = require('multer');

let storage  = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');       // On indique dans quel dossier enregistrer l'image
    }, filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})


function filter(req, file, cb){
    let type = file.mimetype.split('/')[1] // Extension du fichier
    if(type.match(/(jpg|JPG|jpeg|JPEG|png|PNG)$/)){
        cb(null, true)  
        req.file = file
    }else cb(new Error("Le fichier n'a pas été accepter, seul les extension jpg, jpeg, png son accepté"))
    
}

module.exports = multer({ storage: storage, fileFilter: filter }).single('file')