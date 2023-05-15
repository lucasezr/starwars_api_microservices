const Character = require('../data')
const {response} = require ("../utils")


module.exports = async (req, res) => {
    const characters = Character.list();
    response(res, 200, characters);
}