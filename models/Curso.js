const mongoose = require('../db/conn')
const { Schema } = mongoose

const Curso = mongoose.model(
  'Curso',
  new Schema({
    nome: {
      type: String,
      required: true,
    },
    resumo: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    imagem: {
      type: String,
      required: false,
    },
  }),
)

module.exports = Curso
