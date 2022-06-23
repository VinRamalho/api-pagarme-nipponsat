const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema({
    nome: String,
    cpf_cnpj: Number,
    email: String,
    celular: Number,
    rua: String,
    bairro: String,
    cidade: String,
    estado: String,
    recipient_id: String
})

module.exports = mongoose.model('Cliente', cliente)
