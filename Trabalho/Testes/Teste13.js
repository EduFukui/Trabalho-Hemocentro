const readline = require('readline-sync');

const listaDeDoadores = [];

// Cadastro
function cadastroDeDoador () {

    let nomeCadastrado = readline.question("-Nome: ");
    let idadeCadastrado = readline.questionInt("-Idade: ");
    let pesoCadastrado = readline.questionInt("-Peso (Em kg): ");

    console.log("\n-Tipos sanguineos: \n1. A+ \n2. B+ \n3. AB+ \n4. O+ \n5. A- \n6. B- \n7. AB- \n8. O-");

    const tipoSangue = Number(readline.question('-Digite o numero conforme o tipo sanguineo desejado: '));

    definicao(tipoSangue);

    function definicao(num) {
        let tipoSanguineo;

        switch (num) {
            case 1:
                tipoSanguineo = "A+";
                break;
            case 2:
                tipoSanguineo = "B+";
                break;
            case 3:
                tipoSanguineo = "AB+";
                break;
            case 4:
                tipoSanguineo = "O+";
                break;
            case 5:
                tipoSanguineo = "A-";
                break;
              case 6:
                tipoSanguineo = "B-";
                break;
            case 7:
                tipoSanguineo = "AB-";
                break;
            case 8:
                tipoSanguineo = "O-";
                break;
            default:
                console.log("\nOpcao invalida\n");
                return;
    }
    console.log(`Tipo sanguíneo selecionado: ${tipoSanguineo}`);

    let dataDeDoacaoCadastro = String(readline.question("-Digite a data de nascimento (DD/MM/AAAA): "));

    let data = dataDeDoacaoCadastro.split('/');
    let dataAoContrario = data[2] + data[1] + data[0];


    let anoJunto = dataAoContrario.substring(0, 4);  
    let mesJunto = dataAoContrario.substring(4, 6);
    let diaJunto = dataAoContrario.substring(6, 8);
    let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log("Data:", dataCorreta);


    //Armazena Tudo
    listaDeDoadores.push({nomeCadastrado,idadeCadastrado,pesoCadastrado,tipoSanguineo,dataAoContrario})

    console.log("\nInformacoes registradas com sucesso")
    }
}




// Lista de Cadastrados 
function lista () {

    console.log("\n--------------------   LISTAGEM DE DOADORES:   ---------------------------")
    console.log("\n")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
      
        for (let i = 0; i < listaDeDoadores.length; i++) {
        
            
            let anoJunto = listaDeDoadores[i].dataAoContrario.substring(0, 4);  
            let mesJunto = listaDeDoadores[i].dataAoContrario.substring(4, 6);
            let diaJunto = listaDeDoadores[i].dataAoContrario.substring(6, 8);
            let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
            
            console.log(`${listaDeDoadores[i].nomeCadastrado}       | ${listaDeDoadores[i].idadeCadastrado}  |         |  ${listaDeDoadores[i].pesoCadastrado}  |     | ${listaDeDoadores[i].tipoSanguineo}   |        |  ${dataCorreta} `);
        }
    console.log("----------------------------------------------------------------------------")
}






// Buscar Doador por tipo sanguineo
function buscarDoadorTipoAMais () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < listaDeDoadores.length; i++) {
    if (listaDeDoadores[i].tipoSanguineo === "A+") {
    console.log(`${listaDeDoadores[i].nome} . ${listaDeDoadores[i].idade} . ${listaDeDoadores[i].peso} . ${listaDeDoadores[i].tipoSanguineo} . ${listaDeDoadores[i].dataUltimaDoacao}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoBMais () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < listaDeDoadores.length; i++) {
    if (listaDeDoadores[i].tipoSanguineo === "B+") {
    console.log(`${listaDeDoadores[i].nome} . ${listaDeDoadores[i].idade} . ${listaDeDoadores[i].peso} . ${listaDeDoadores[i].tipoSanguineo} . ${listaDeDoadores[i].dataUltimaDoacao}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoABMais () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < listaDeDoadores.length; i++) {
    if (listaDeDoadores[i].tipoSanguineo === "AB+") {
    console.log(`${listaDeDoadores[i].nome} . ${listaDeDoadores[i].idade} . ${listaDeDoadores[i].peso} . ${listaDeDoadores[i].tipoSanguineo} . ${listaDeDoadores[i].dataUltimaDoacao}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoOMais () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < listaDeDoadores.length; i++) {
    if (listaDeDoadores[i].tipoSanguineo === "O+") {
    console.log(`${listaDeDoadores[i].nome} . ${listaDeDoadores[i].idade} . ${listaDeDoadores[i].peso} . ${listaDeDoadores[i].tipoSanguineo} . ${listaDeDoadores[i].dataUltimaDoacao}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoAMenos () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < listaDeDoadores.length; i++) {
    if (listaDeDoadores[i].tipoSanguineo === "A-") {
    console.log(`${listaDeDoadores[i].nome} . ${listaDeDoadores[i].idade} . ${listaDeDoadores[i].peso} . ${listaDeDoadores[i].tipoSanguineo} . ${listaDeDoadores[i].dataUltimaDoacao}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoBMenos () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < listaDeDoadores.length; i++) {
    if (listaDeDoadores[i].tipoSanguineo === "B-") {
    console.log(`${listaDeDoadores[i].nome} . ${listaDeDoadores[i].idade} . ${listaDeDoadores[i].peso} . ${listaDeDoadores[i].tipoSanguineo} . ${listaDeDoadores[i].dataUltimaDoacao}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoABMenos () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < listaDeDoadores.length; i++) {
    if (listaDeDoadores[i].tipoSanguineo === "AB-") {
    console.log(`${listaDeDoadores[i].nome} . ${listaDeDoadores[i].idade} . ${listaDeDoadores[i].peso} . ${listaDeDoadores[i].tipoSanguineo} . ${listaDeDoadores[i].dataUltimaDoacao}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoOMenos () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < listaDeDoadores.length; i++) {
    if (listaDeDoadores[i].tipoSanguineo === "O-") {
    console.log(`${listaDeDoadores[i].nome} . ${listaDeDoadores[i].idade} . ${listaDeDoadores[i].peso} . ${listaDeDoadores[i].tipoSanguineo} . ${listaDeDoadores[i].dataUltimaDoacao}`);
    }
}
console.log("----------------------------------------------------------------------------")
};



function buscarDoadorTipoSangue () {
    console.log("\n\n\n-Tipos sanguineos: \n1. A+ \n2. B+ \n3. AB+ \n4. O+ \n5. A- \n6. B- \n7. AB- \n8. O- \n9. Voltar");

    const escolhaDoSangue = Number(readline.question('Digite o numero conforme o tipo sanguineo desejado: '))

    switch (escolhaDoSangue) {
        case 1: 
        buscarDoadorTipoAMais()
            break;
        case 2:
        buscarDoadorTipoBMais()
            break;
        case 3:
        buscarDoadorTipoABMais()
            break;
        case 4:
        buscarDoadorTipoOMais()
            break;
        case 5:
        buscarDoadorTipoAMenos() 
            break;
        case 6:
        buscarDoadorTipoBMenos()
            break;
        case 7:
        buscarDoadorTipoABMenos()
            break;
        case 8:
        buscarDoadorTipoOMenos()
            break;
        case 9:
            console.log("\nVoltando...")
            return;
        default:
            console.log("\nOpcao invalida\n");
            return;
    }

};





// Menu
function exibirMenu () {
    let opcao;
    while (true) {
        opcao = Number(readline.question("\n===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE ===== \n\n1. Cadastrar doador \n2. Listar doadores \n3. Buscar doador por tipo sanguineo \n4. Buscar doador por data da ultima doacao \n5. Sair \n-Escolha uma numero correspondente a opcao desejada: "));
        switch (opcao) {
            case 1:
                cadastroDeDoador()
                break;
            case 2:
                lista()
                break;
            case 3:
                buscarDoadorTipoSangue()
                break;
            case 4:
                buscarDoadorDataDoacao()
                break;
            case 5:
                console.log("\nSaindo...\n");
                return;
            default:
                console.log("\nOpcao invalida\n");
                break;
        }
    }
};

exibirMenu();