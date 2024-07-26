const fs = require('fs')
const path = require('path')

const filePathRealms = path.join(__dirname, '../data/realms.json')
const filePathCharacters = path.join(__dirname, '../data/characters.json')

const controller = {
    index: async (req, res) => {
        try {
            const realms = JSON.parse(fs.readFileSync(filePathRealms, 'utf-8'))
    
            return res.render('index', {
                realms
            })
    
        } catch (error) {
            console.log(error);
        }
    },

    realm: async (req, res) => {
        try {
            const characters = JSON.parse(fs.readFileSync(filePathCharacters, 'utf-8'));
            const realms = JSON.parse(fs.readFileSync(filePathRealms, 'utf-8'));
    
            const realm = realms.find(realm => realm.id === +req.params.id);
    
            const charactersInRealm = characters.filter(character => character.realm === realm.name);
    
            return res.render('realmCharacter', {
                realm,
                charactersInRealm
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = controller
// demonio "https://ts2.mm.bing.net/th?q=tribal%20angel",