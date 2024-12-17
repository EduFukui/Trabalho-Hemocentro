const readline = require('readline-sync');

let lista = [];

// Cadastro
function cadastroDeDoador() {
    let nome = readline.question("-Nome: ");
    let idade = readline.questionInt("-Idade: ");
    let peso = readline.questionInt("-Peso (Em kg): ");

    console.log("-Tipos sanguíneos: \n1. A+ \n2. B+ \n3. AB+ \n4. O+ \n5. A- \n6. B- \n7. AB- \n8. O-");
    const tipoSanguineoEscolhido = Number(readline.question('-Digite o número conforme o tipo sanguíneo desejado: '));

    definicao(tipoSanguineoEscolhido);
    function definicao(num) {
        let tipoSanguineo;

        switch (num) {
            case 1: tipoSanguineo = "A+"; break;
            case 2: tipoSanguineo = "B+"; break;
            case 3: tipoSanguineo = "AB+"; break;
            case 4: tipoSanguineo = "O+"; break;
            case 5: tipoSanguineo = "A-"; break;
            case 6: tipoSanguineo = "B-"; break;
            case 7: tipoSanguineo = "AB-"; break;
            case 8: tipoSanguineo = "O-"; break;
            default:
                console.log("\nOpção inválida\n");
                return;
        }

        while (true) {
            let dataDeDoacaoCadastro = String(readline.question("-Digite a data de doação (DD/MM/AAAA): "));
            let data = dataDeDoacaoCadastro.split('/');

            if (data.length === 3) {
                let dataAoContrario = String(data[2] + data[1] + data[0]);

                // Armazena tudo
                lista.push({ nome, idade, peso, tipoSanguineo, dataAoContrario });

                let dataCorreta = `${data[0]}/${data[1]}/${data[2]}`;
                console.log(`\nInformações registradas com sucesso\n===Informações salvas===`);
                console.log(`-Nome: ${nome}\n-Idade: ${idade}\n-Peso(em Kg): ${peso}\n-Tipo Sanguíneo: ${tipoSanguineo}\n-Data: ${dataCorreta}`);
                return;
            } else {
                console.log('Data Inválida. Digite a data corretamente em formato (DD/MM/AAAA)\n');
            }
        }
    }
}

// Lista de Cadastrados  
function listaDeDoadores() {
    console.log("\n-------------------------   LISTAGEM DE DOADORES:   -------------------------");
    console.log("NOME".padEnd(20) + "IDADE".padEnd(8) + "PESO".padEnd(8) + "TIPO SANGUÍNEO".padEnd(16) + "ÚLTIMA DOAÇÃO");
    console.log("-".repeat(70));
    for (let i = 0; i < lista.length; i++) {
        let data = lista[i].dataAoContrario;
        let dataCorreta = `${data.slice(6, 8)}/${data.slice(4, 6)}/${data.slice(0, 4)}`;

        console.log(lista[i].nome.padEnd(20) + 
                    String(lista[i].idade).padEnd(8) + 
                    `${lista[i].peso}kg`.padEnd(8) + 
                    lista[i].tipoSanguineo.padEnd(16) + 
                    dataCorreta);
    }
    console.log("-----------------------------------------------------------------------------");
}

// Buscar Doador por Data
function buscarDoadorDataDoacao() {
    let opcaoDeBusca = readline.question("-Digite a data limite (DD/MM/AAAA): ");
    let dataInvertida = opcaoDeBusca.split('/').reverse().join('');

    console.log(`\n------------------   LISTAGEM DE DOADORES ATÉ ${opcaoDeBusca}:   ------------------`);
    console.log("NOME".padEnd(20) + "IDADE".padEnd(8) + "PESO".padEnd(8) + "TIPO SANGUÍNEO".padEnd(16) + "ÚLTIMA DOAÇÃO");
    console.log("-".repeat(70));

    let encontrou = false;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].dataAoContrario <= dataInvertida) {
            let data = lista[i].dataAoContrario;
            let dataCorreta = `${data.slice(6, 8)}/${data.slice(4, 6)}/${data.slice(0, 4)}`;
            console.log(lista[i].nome.padEnd(20) + 
                        String(lista[i].idade).padEnd(8) + 
                        `${lista[i].peso}kg`.padEnd(8) + 
                        lista[i].tipoSanguineo.padEnd(16) + 
                        dataCorreta);
            encontrou = true;
        }
    }

    if (!encontrou) {
        console.log("Nenhum doador encontrado até esta data.");
    }
    console.log("-----------------------------------------------------------------------------");
}

// Menu
function exibirMenu() {
    let opcao;
    while (true) {
        opcao = Number(readline.question("\n===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====\n\n1. Cadastrar doador\n2. Listar doadores\n3. Buscar doador por data\n4. Sair\n-Escolha uma opção: "));
        switch (opcao) {
            case 1: cadastroDeDoador(); break;
            case 2: listaDeDoadores(); break;
            case 3: buscarDoadorDataDoacao(); break;
            case 4: console.log("\nSaindo..."); return;
            default: console.log("\nOpção inválida\n"); break;
        }
    }
}

exibirMenu();
