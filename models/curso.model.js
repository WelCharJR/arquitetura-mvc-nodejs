function listarCursos() {
    const cursos = [
        {id: 1, nome: "Tecnico em informatica", duracao: 1200, descricao: "Curso Foda"},
        {id: 2, nome: "Tecnico em enfermagem", duracao: 1800, descricao: "Curso Foda de muie"},
        {id: 3, nome: "Tecnico em Yaping", duracao: 2400, descricao: "Curso dos mandrake"}
    ]

    return cursos;
}

module.exports = {
    listarCursos
}