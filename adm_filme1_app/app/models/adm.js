const Adm = {
    acao: () => [{
        id: 1, 
        titulo: "O resgate do soldado Ryan", 
        tipo: "Ação/Guerra", 
        tempo: "1:30", 
        classificacao: "+14"
    },
    {
        id: 2,
        titulo: "Carga Explosiva",
        tipo: "Ação",
        tempo: "1:45",
        classificacao: "+16"
    },
    {
        id: 3,
        titulo: "American Sniper",
        tipo: "Ação",
        tempo: "1:50",
        classificacao: "+16"
    }],

    terror: () => [{
        id: 1, 
        titulo: "Sexta-Feira 13", 
        tipo: "Terror", 
        tempo: "1:30", 
        classificacao: "+16"
    },
    {
        id: 2,
        titulo: "Madrugada dos Mortos",
        tipo: "Terror",
        tempo: "1:25",
        classificacao: "+16"
    },
    {
        id: 3,
        titulo: "#Alive",
        tipo: "Terror",
        tempo: "1:20",
        classificacao: "+16"
    }],

    comedia: () => [{
        id: 1, 
        titulo: "Os farofeiros", 
        tipo: "Comédia", 
        tempo: "1:40", 
        classificacao: "+14"
    },
    {
        id: 2,
        titulo: "Os trapalhões",
        tipo: "Comédia",
        tempo: "1:45",
        classificacao: "Livre"
    },
    {
        id: 3,
        titulo: "American Pie",
        tipo: "Comédia",
        tempo: "1:40",
        classificacao: "+16"
    }]
}

module.exports = Adm;