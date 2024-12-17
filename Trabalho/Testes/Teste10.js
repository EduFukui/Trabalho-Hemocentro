const readline = require('readline-sync');

const lista = []

function cadastroDeDoador () {

    let nomeCadastrado = readline.question("-Nome: ");
    let idadeCadastrado = readline.questionInt("-Idade: ");
    let pesoCadastrado = readline.questionInt("-Peso (Em kg): ");

    console.log("\n-Tipos sanguineos: \n1. A+ \n2. B+ \n3. AB+ \n4. O+ \n5. A- \n6. B- \n7. AB- \n8. O-");

    const tipoSangue = Number(readline.question('-Digite o numero conforme o tipo sanguineo desejado: '));

    definicao(tipoSangue);

    function definicao(num) {
        let tipoSangueCadastrado;

        switch (num) {
            case 1:
                tipoSangueCadastrado = "A+";
                break;
            case 2:
                tipoSangueCadastrado = "B+";
                break;
            case 3:
                tipoSangueCadastrado = "AB+";
                break;
            case 4:
                tipoSangueCadastrado = "O+";
                break;
            case 5:
                tipoSangueCadastrado = "A-";
                break;
              case 6:
                tipoSangueCadastrado = "B-";
                break;
            case 7:
                tipoSangueCadastrado = "AB-";
                break;
            case 8:
                tipoSangueCadastrado = "O-";
                break;
            default:
                console.log("\nOpcao invalida\n");
                return;
    }

    let dataDeDoacaoCadastro = String(readline.question("-Digite a data de nascimento (DD/MM/AAAA): "));

    let data = dataDeDoacaoCadastro.split('/');
    let dataAoContrario = data[2] + data[1] + data[0];

    console.log("Data invertida para armazenar:", dataAoContrario);
    console.log(data);

    let anoJunto = dataAoContrario.substring(0, 4);  
    let mesJunto = dataAoContrario.substring(4, 6);
    let diaJunto = dataAoContrario.substring(6, 8);
    let dataCorreta = diaJunto + "/" + mesJunto + "/" + anoJunto;
    console.log("Data:", dataCorreta);

    console.log(`Tipo sanguíneo selecionado: ${tipoSangueCadastrado}`);

    //Armazena Tudo
    lista.push({nomeCadastrado,idadeCadastrado,pesoCadastrado,tipoSangueCadastrado,dataAoContrario})

    console.log(`Informacoes registradas com sucesso`)
}



}
cadastroDeDoador()


