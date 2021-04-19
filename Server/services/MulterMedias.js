
// Import packages
const multer = require('multer');

let storage  = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');       // On indique dans quel dossier enregistrer l'image
    }, filename: (req, file, cb) => {
        const ext  = file.mimetype.split('/')
        const name = file.originalname.split(' ').join('_') + Date.now() + '.' + ext[1]

        req.fileInformations = { file_name: name }

        if(ext[1] == 'jpeg' || ext[1] == 'png' || ext[1] == 'jpg') cb(null, name)
        else return req.res.json({success: false, error: "Seule les fichier jpeg ou png sont autorisé"})
        
    }
})


module.exports = multer({ storage: storage }).single('file')