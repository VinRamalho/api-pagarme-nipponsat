const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plano = new Schema({
    cliente_id: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
    },
    nome: String,
    plano: String,
    preco: Number,
})

module.exports = mongoose.model('Plano', plano)
