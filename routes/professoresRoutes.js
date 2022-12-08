const express = require('express')
const router = express.Router()
const ProfessorController = require('../controllers/ProfessorController')
const Upload = require('../helpers/uploadProfessor')

router.post('/edit', Upload.single('imagem'), ProfessorController.editaProfessorPost)
router.get('/', ProfessorController.mostrarProfessores)
router.get('/create', ProfessorController.criarProfessor)
router.post('/create',Upload.single('imagem'), ProfessorController.criarProfessorPost)
router.get('/:id', ProfessorController.buscaProfessor)
router.post('/remove/:id', ProfessorController.removeProfessor)
router.get('/edit/:id', ProfessorController.editaProfessor)

module.exports = router
