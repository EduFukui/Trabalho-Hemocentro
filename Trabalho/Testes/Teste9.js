const readline = require('readline-sync');

let dataDeDoacaoCadastro;

dataDeDoacaoCadastro = String(readline.question("Digite a data de nascimento (DD/MM/AAAA): "));

let data = dataDeDoacaoCadastro.split('/');

let dataInvertida = data[2] + data[1] + data[0];


console.log("Data invertida para armazenar:", dataInvertida);

console.log(data);

let ano = dataInvertida.substring(0, 4);  
let mes = dataInvertida.substring(4, 6);
let dia = dataInvertida.substring(6, 8);


let dataNormal = dia + "/" + mes + "/" + ano;
console.log("Data:", dataNormal);


