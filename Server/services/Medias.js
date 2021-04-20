
// Import packages
const multer = require('multer');

let storage  = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');       // On indique dans quel dossier enregistrer l'image
    }, filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})


async function filter(req, file, cb){
    let type = file.mimetype.split('/')[1] // Extension du fichier
    if(type.match(/(jpg|JPG|jpeg|JPEG|png|PNG)$/)){ // Vérifie si le fichier donnée est un fichier attendue c'est a dire une image
        cb(null, true)  
        req.file = file                             // Sert à la verif dans le controller
    }else{
        cb(null, false)
        req.file_error = "Le fichier n'a pas été accepter, seul les extension jpg, jpeg, png son accepté"   // Sert a get l'erreur dans le controller
    } 
    
}

module.exports = multer({ storage: storage, fileFilter: filter }).single('file')