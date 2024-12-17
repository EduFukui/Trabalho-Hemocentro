const readline = require('readline-sync');
//regex?????????

let datasDeDoacao = [];

// Função para validar a data
const validarData = (data) => {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/; // Formato DD/MM/AAAA
    if (!regex.test(data)) {
      return false;
    }
  
    const [dia, mes, ano] = data.split('/').map(Number);
  
    // Verificar se a data é válida
    const dataObj = new Date(ano, mes - 1, dia);
    return (
      dataObj.getFullYear() === ano &&
      dataObj.getMonth() === mes - 1 &&
      dataObj.getDate() === dia
    );
  };

  
      if (validarData(dataDeDoacaoCadastro)) 
 

function criarData () {
    let dataDeDoacaoCadastro;
    while (true) {
        dataDeDoacaoCadastro = readline.question("Digite a data de nascimento (DD/MM/AAAA): ");

        const [dia, mes, ano] = dataDeDoacaoCadastro.split('/')


    if (dia >= 1 && dia <= 31 && mes >= 1 && mes <= 12 && ano.length === 4) {
        let dataFormada = (`${dia}/${mes}/${ano}`);
        datasDeDoacao.push(dataFormada);
        console.log("Data registrada:", dataFormada);
        break;
    }
    else {
        console.log("Data inválida. Por favor, insira no formato DD/MM/AAAA.");
        }
    }
}

criarData()





function inverterData () {}












