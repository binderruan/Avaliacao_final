const Curso = require('../models/Curso')
const Professor = require('../models/Professor')
const mongoose = require('mongoose')


module.exports = class IndexController {
  
  static async mostrarIndex(req, res) {
    const cursos = await Curso.find({}).lean()
    const professores = await Professor.find({}).lean()

    res.render('site/index', {layout: false, cursos, professores })
  }
}
