const readline = require("readline-sync");

const listaDeDoadores = [ //Cadastrados 
    { nome: "Carlos Silva", idade: 29, peso: 72, tipoSanguineo: "O+", dataUltimaDoacao: "2023-09-15" },
    { nome: "Ana Souza", idade: 40, peso: 65, tipoSanguineo: "A-", dataUltimaDoacao: "2024-03-10" },
    { nome: "Marcos Dias", idade: 35, peso: 80, tipoSanguineo: "B+", dataUltimaDoacao: "2024-01-22" },
    { nome: "Clara Melo", idade: 25, peso: 55, tipoSanguineo: "AB-", dataUltimaDoacao: "2024-06-05" },
    { nome: "João Ferreira", idade: 42, peso: 90, tipoSanguineo: "O-", dataUltimaDoacao: "2023-11-18" },
    { nome: "Fernanda Lima", idade: 33, peso: 68, tipoSanguineo: "A+", dataUltimaDoacao: "2024-04-10" },
    { nome: "Luiz Carvalho", idade: 50, peso: 85, tipoSanguineo: "B-", dataUltimaDoacao: "2024-02-05" },
    { nome: "Beatriz Almeida", idade: 27, peso: 60, tipoSanguineo: "AB+", dataUltimaDoacao: "2024-05-18" }
  ];
  
  function lista () {

      console.log("\n--------------------   LISTAGEM DE DOADORES:   --------------------")
      console.log("\n")
      console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
      console.log("----------------------------------------------------------------------------")
      
        for (let i = 0; i < listaDeDoadores.length; i++) {
            console.log(`${listaDeDoadores[i].nome}       | ${listaDeDoadores[i].idade}  |         |  ${listaDeDoadores[i].peso}  |     | ${listaDeDoadores[i].tipoSanguineo}   |        |  ${listaDeDoadores[i].dataUltimaDoacao} `);
        }

    
  }

lista()