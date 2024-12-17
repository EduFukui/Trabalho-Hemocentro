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
    let dataDeDoacaoCadastro = String(readline.question("-Digite a data de nascimento (DD/MM/AAAA): "));
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
cadastroDeDoador()










/*    let anoJunto = dataAoContrario.substring(0, 4);  
    let mesJunto = dataAoContrario.substring(4, 6);
    let diaJunto = dataAoContrario.substring(6, 8);
    let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log("Data:", dataCorreta); */










    /*
    // Validação da data
    while (true) {
        let dataDeNascimento = readline.question("- Digite a data de nascimento (DD/MM/AAAA): ");
        
        // Tenta converter a data em um objeto Date
        if (validarData(dataDeNascimento)) {
            let [dia, mes, ano] = dataDeNascimento.split('/');
            let dataAoContrario = `${ano}${mes}${dia}`;

            // Salva na lista
            lista.push({ nome, idade, peso, tipoSanguineo, dataAoContrario });

            console.log(`\nInformações registradas com sucesso\n=== Informações salvas ===`);
            console.log(`- Nome: ${nome}\n- Idade: ${idade}\n- Peso (em Kg): ${peso}\n- Tipo Sanguíneo: ${tipoSanguineo}\n- Data: ${dataDeNascimento}`);
            return;
        } else {
            console.log("\nData inválida! Tente novamente.\n");
        }
    }
}

// Função para definir tipo sanguíneo
function definirTipoSanguineo(num) {
    const tipos = ["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"];
    return tipos[num - 1] || null;
}

// Função para validar a data
function validarData(data) {
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/; // Formato DD/MM/AAAA
    const match = data.match(regex);

    if (!match) return false; // Verifica se está no formato correto

    let dia = parseInt(match[1], 10);
    let mes = parseInt(match[2], 10);
    let ano = parseInt(match[3], 10);

    // Validação do mês
    if (mes < 1 || mes > 12) return false;

    // Validação do dia
    let diasNoMes = new Date(ano, mes, 0).getDate(); // Pega o último dia do mês
    if (dia < 1 || dia > diasNoMes) return false;

    return true;
}

// Executa a função
cadastroDeDoador(); */