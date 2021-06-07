const user  = require('./UserSeed').seed
const album = require('./AlbumsSeed').seed
const picture = require('./PicturesSeeder').seed
const albumshared = require('./AlbumUserSeeder').seed

const seed = [user,picture,album, albumshared]

seed.forEach(seeder => {
    seeder()
})