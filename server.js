const express = require('express')
const cursoController = require('./controllers/curso.controller')
const alunosController = require('./controllers/alunos.controller')
const professorController = require('./controllers/professor.controller')

const app = express()

app.get('/listar-cursos', cursoController.listar)

app.get('/listar-alunos', alunosController.listar)

app.get('/listar-professores', professorController.listar)

app.listen(3000, () => {
    console.log("Servidor está rodando com sucesso")
})