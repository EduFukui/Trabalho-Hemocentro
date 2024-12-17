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
    let dataDeDoacaoCadastro = String(readline.question("-Digite a data de nascimento (DD/MM/AAAA): "));
    let data = dataDeDoacaoCadastro.split('/');
    let dataAoContrario = data[2] + data[1] + data[0];

    //Armazena Tudo
    lista.push({nome,idade,peso,tipoSanguineo,dataAoContrario})

    let anoJunto = dataAoContrario.substring(0, 4);  
    let mesJunto = dataAoContrario.substring(4, 6);
    let diaJunto = dataAoContrario.substring(6, 8);
    let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;

    console.log(`\nInformacoes registradas com sucesso\n===Informacoes salvas===`)
    console.log(`-Nome: ${nome}\n-Idade: ${idade}\n-Peso(em Kg): ${peso}\n-Tipo Sanguineo: ${tipoSanguineo}\n-Data: ${dataCorreta}`);
    }
}
