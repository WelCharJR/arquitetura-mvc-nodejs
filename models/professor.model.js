function listarProfessores() {
    const professores = [
        {id: 1, nome: "Ton", idade: 38, area: "Redes e manutenção de pcs"},
        {id: 2, nome: "Du", idade: 40, area: "Redes e manutenção de pcs"},
        {id: 3, nome: "Kaique", idade: 25, area: "Programação"}
    ]

    return professores;
}

module.exports = {
    listarProfessores
}