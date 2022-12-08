const express = require('express')
const router = express.Router()
const CursoController = require('../controllers/CursoController')
const Upload = require('../helpers/uploadCurso')

router.post('/edit', Upload.single('imagem'), CursoController.editaCursoPost)
router.get('/', CursoController.mostrarCursos)
router.get('/create', CursoController.criarCurso)
router.post('/create',Upload.single('imagem'), CursoController.criarCursoPost)
router.get('/:id', CursoController.buscaCurso)
router.post('/remove/:id', CursoController.removeCurso)
router.get('/edit/:id', CursoController.editaCurso)

module.exports = router
