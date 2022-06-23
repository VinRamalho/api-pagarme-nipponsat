const Cliente = require('../models/cliente');
const Plano = require('../models/plano');

//DATABASE
require('../database');

const addInDatabase = async () => {
    try{
        await Cliente.save();
        await Plano.save();

    } catch (err) {
        console.log('deu ruim aqui');
    }
};

addInDatabase();