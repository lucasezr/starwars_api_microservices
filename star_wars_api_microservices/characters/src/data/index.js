const characters = require('./characters.json');

module.exports = {
    //aca defino funciones que sera de esto que simulara ser el modelo
    list: async () => {
        return characters;
    },
    
    create: async() => {
        throw Error ("Hay un error al momento de crear el personaje")
    }
};
