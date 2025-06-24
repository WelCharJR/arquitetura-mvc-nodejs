const professorModel = require('../models/professor.model')

function listar(req, res) {
    const professores = professorModel.listarProfessores();

    res.json(professores)
}

module.exports = {
    listar
}