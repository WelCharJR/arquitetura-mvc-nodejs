const alunosModel = require('../models/alunos.model')

function listar(req, res) {
    const alunos = alunosModel.listarAlunos();

    res.json(alunos)
}

module.exports = {
    listar
}