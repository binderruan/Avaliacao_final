const Curso = require('../models/Curso')
const mongoose = require('mongoose')


module.exports = class CursoController {
  
  static async mostrarCursos(req, res) {
    const cursos = await Curso.find({}).lean()

    //console.log(cursos)

    res.render('cursos/all', { cursos })
  }

  static criarCurso(req, res) {
    res.render('cursos/create')
  }

  static async criarCursoPost(req, res) {

    const nome = req.body.nome
    const resumo = req.body.resumo
    const descricao = req.body.descricao

    const imagem = req.file.filename
    const curso = new Curso({ nome, resumo, descricao, imagem })

    await curso.save()

    res.redirect('/cursos')
  }

  static async buscaCurso(req, res) {
    const id = req.params.id

    const curso = await Curso.findById(id).lean()

    //console.log(curso)

    res.render('cursos/detail', { curso })
  }

  static async removeCurso(req, res) {
    const id = req.params.id

    await Curso.deleteOne({ _id: id })

    res.redirect('/cursos')
  }

  static async editaCurso(req, res) {
    const id = req.params.id

    const curso = await Curso.findById(id).lean()

    res.render('cursos/edit', { curso })
  }

  static async editaCursoPost(req, res) {
    const id = req.body.id; 

    const nome = req.body.nome
    const resumo = req.body.resumo
    const descricao = req.body.descricao

    if (req.file) {

      const imagem = req.file.filename
      var curso = { nome, resumo, descricao, imagem }
    }
    else {
      var curso = { nome, resumo, descricao }
    }

    await Curso.updateOne({ _id: id }, curso)

    res.redirect('/cursos')
  }
}
