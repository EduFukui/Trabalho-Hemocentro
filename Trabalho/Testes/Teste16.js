const readline = require('readline-sync');

const lista = [];

//cadastro


function cadastroDeDoador () {

    let nome = readline.question("-Nome: ");
    let idade = readline.questionInt("-Idade: ");
    let peso = readline.questionInt("-Peso (Em kg): ");

    console.log("-Tipos sanguineos: \n1. A+ \n2. B+ \n3. AB+ \n4. O+ \n5. A- \n6. B- \n7. AB- \n8. O-");
    const tipoSanguineoEscolido = Number(readline.question('-Digite o numero conforme o tipo sanguineo desejado: '));

    definicao(tipoSanguineoEscolido);
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
    while (true) {
    let dataDeDoacaoCadastro = String(readline.question("-Digite a data de doacao  (DD/MM/AAAA): "));
    let data = dataDeDoacaoCadastro.split('/');


    if (data[1] === '01' || data[1] === '02' ||  data[1] === '03'  || data[1] === '04' ||data[1] === '05'  || data[1] === '06' ||  data[1] === '07' ||  data[1] === '08' || data[1] === '09' ||  data[1] === '10' || data[1] === '11' || data[1] === '12' ) {
        let dataAoContrario = String(data[2] + data[1] + data[0]);

        //Armazena Tudo
        lista.push({nome,idade,peso,tipoSanguineo,dataAoContrario})
    
        let anoJunto = dataAoContrario.substring(0, 4);  
        let mesJunto = dataAoContrario.substring(4, 6);
        let diaJunto = dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    
        console.log(`\nInformacoes registradas com sucesso\n===Informacoes salvas===`)
        console.log(`-Nome: ${nome}\n-Idade: ${idade}\n-Peso(em Kg): ${peso}\n-Tipo Sanguineo: ${tipoSanguineo}\n-Data: ${dataCorreta}`);
        return;
        }
    else {console.log('Data Invalida. Digite a data corretamente em formato (DD/MM/AAAA)\n')}

        }
    }
}






// Lista de Cadastrados  
function listaDeDoadores () {

    console.log("\n-------------------------   LISTAGEM DE DOADORES:   -------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
      
        for (let i = 0; i < lista.length; i++) {
        
            
            let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
            let mesJunto = lista[i].dataAoContrario.substring(4, 6);
            let diaJunto = lista[i].dataAoContrario.substring(6, 8);
            let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
            
            console.log(`${lista[i].nome}       | ${lista[i].idade}  |         |  ${lista[i].peso}  |     | ${lista[i].tipoSanguineo}   |        |  ${dataCorreta} `);
        }
    console.log("-----------------------------------------------------------------------------")
}





// Buscar Doador por tipo sanguineo
function buscarDoadorTipoAMais () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "A+") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome} . ${lista[i].idade} . ${lista[i].peso} . ${lista[i].tipoSanguineo} . ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoBMais () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "B+") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome} . ${lista[i].idade} . ${lista[i].peso} . ${lista[i].tipoSanguineo} . ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoABMais () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "AB+") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome} . ${lista[i].idade} . ${lista[i].peso} . ${lista[i].tipoSanguineo} . ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoOMais () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "O+") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome} . ${lista[i].idade} . ${lista[i].peso} . ${lista[i].tipoSanguineo} . ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoAMenos () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "A-") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome} . ${lista[i].idade} . ${lista[i].peso} . ${lista[i].tipoSanguineo} . ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoBMenos () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "B-") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome} . ${lista[i].idade} . ${lista[i].peso} . ${lista[i].tipoSanguineo} . ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoABMenos () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "AB-") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome} . ${lista[i].idade} . ${lista[i].peso} . ${lista[i].tipoSanguineo} . ${dataCorreta}`);
    }
}
console.log("----------------------------------------------------------------------------")
};

function buscarDoadorTipoOMenos () {
    console.log("\n\n\n------------------------\nRESULTADO DA BUSCA: \n----------------------------------------------------------------------------")
    console.log("NOME                 |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO")
    

for (let i = 0; i < lista.length; i++) {
    if (lista[i].tipoSanguineo === "O-") {
        let anoJunto = lista[i].dataAoContrario.substring(0, 4);  
        let mesJunto = lista[i].dataAoContrario.substring(4, 6);
        let diaJunto = lista[i].dataAoContrario.substring(6, 8);
        let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log(`${lista[i].nome} . ${lista[i].idade} . ${lista[i].peso} . ${lista[i].tipoSanguineo} . ${dataCorreta}`);
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







// Buscar por Data de ultima doacao

function buscarDoadorDataDoacao () {
    while (true) {
        opcaoDeBusca = String(readline.question("-Digite a data de doacao para buscar (DD/MM/AAAA): "));
        let opcaoCortada = opcaoDeBusca.split('/');

        if (opcaoCortada.length !== 3) {
            console.log("Formato de data inválido. Tente novamente.\n");
        }
        let dataAoContrarioDeBusca = Number(opcaoCortada[2] + opcaoCortada[1] + opcaoCortada[0]);

        let dataDeComparacao = Number(lista.dataAoContrario)

        console.log(`\n-------------------------   LISTAGEM DE DOADORES DE ${dataCorreta} :   -------------------------`);
        console.log("NOME              |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ULTIMA DOAÇÃO");
        for (let i = 0; i < lista.length; i++) {
            let anoJunto = dataAoContrarioDeBuscaString.substring(0, 4);  
            let mesJunto = dataAoContrarioDeBuscaString.substring(4, 6);
            let diaJunto = dataAoContrarioDeBuscaString.substring(6, 8);
            let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
            if (dataDeComparacao[i] <= dataAoContrarioDeBusca) {

                console.log(`${lista[i].nome}       | ${lista[i].idade}  |         |  ${lista[i].peso}  |     | ${lista[i].tipoSanguineo}   |        |  ${dataCorreta} `);

            }

            console.log("-----------------------------------------------------------------------------");
        return;
        }
    }
}

  








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
                listaDeDoadores()
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