function listarAlunos() {
    const alunos = [
        {id: 1, nome: "Welington", idade: 20, cidade: "Gavião Peixoto"},
        {id: 2, nome: "Isaque", idade: 21, cidade: "Araraquara"},
        {id: 3, nome: "Allan", idade: 19, cidade: "Nova Europa"}
    ]

    return alunos;
}

module.exports = {
    listarAlunos
}