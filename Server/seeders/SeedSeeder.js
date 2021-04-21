const user  = require('./UserSeed').seed
const album = require('./AlbumsSeed').seed
const picture = require('./PicturesSeeder').seed



const seed = [user,album, picture]

seed.forEach(seeder => {
    seeder()
})